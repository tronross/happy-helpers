// @refresh reset
import Head from 'next/head';
import { useState, useMemo, useEffect } from 'react';
import prisma from '../../prisma/.db';
import axios from "axios";
import { useRouter } from "next/navigation";


// Component dependencies
import RequestList from '@/components/RequestList';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import RequestSidebar from '@/components/RequestSidebar';

export default function UserTasks({ userRequests, offers, user }) {

  // Hooks
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('Any Status');
  const [selectedRequestId, setSelectedRequestId] = useState();
  const [selectedOffers, setSelectedOffers] = useState([]);

  const router = useRouter(); // Used to force render page (all state will be lost)

  // Track the status of the currently selected request and it's offer status
  const [selectedRequestStatus, setSelectedRequestStatus] = useState();
  useEffect(() => {
    if (selectedRequestId) {
      const selectedRequest = userRequests.find((request) => request.id === selectedRequestId);
      setSelectedRequestStatus(selectedRequest.status);
    }
  }, [selectedRequestId, userRequests]);

  // Keep selected request id in memory during a router.refresh()
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const selectedRequestId = localStorage.getItem('selectedRequestId');
      if (selectedRequestId) {
        setSelectedRequestId(parseInt(selectedRequestId));
      }
      localStorage.clear();
    }
  }, []);

  /* When user clicks on accept offer from volunteer button:
   * In tasks table: set task status as pending where id = selectedTask
   * In offers table: set offer status as pending where id = offer.id
   */
  const handleAcceptOffer = async function(offerId) {
    await axios.put(`http://localhost:3000/api/offers/${offerId}`, {newStatus: 'PENDING'});
    await axios.put(`http://localhost:3000/api/tasks/${selectedRequestId}`, {newStatus: 'PENDING'});
    localStorage.setItem("selectedRequestId", selectedRequestId);
    router.refresh(); // Force reload
  };

  /* When user clicks on request complete button:
   * In tasks table: set task status as closed where id = selectedTask
   * In offers table: set offer status as closed where id = offer.id
   * If the volunteer has received a star, add it to their user where user.id = offers.user_id
   */
  const handleRequestComplete = async function(offerId, volunteerId, giveStar) {
    console.log('in handleRequestComplete function, offer id:', offerId, 'selectedRequestId', selectedRequestId, 'volunteerId', volunteerId, 'giveStar', giveStar);
    
    await axios.put(`http://localhost:3000/api/offers/${offerId}`, {newStatus: 'COMPLETE'});
    await axios.put(`http://localhost:3000/api/tasks/${selectedRequestId}`, {newStatus: 'COMPLETE'});

    if (giveStar) {
      await axios.put(`http://localhost:3000/api/users/${volunteerId}`, {field: 'stars'});
    }

    localStorage.setItem("selectedRequestId", selectedRequestId);
    router.refresh(); // Force reload
  };

  // Create an array of offers received for a task when it is selected
  useEffect(() => {
    if (selectedRequestId) {
      const offersReceived = offers.filter((offer) => offer.taskId === selectedRequestId);
      setSelectedOffers(offersReceived);
    }
  }, [selectedRequestId, offers]);
  
  const filterRequests = function() {
    if (category === 'All Categories' && status === 'Any Status') {
      return userRequests;
    }
    if (category !== 'All Categories' && status === 'Any Status') {
      return userRequests.filter(request => request.category === category);
    }
    if (category === 'All Categories' && status !== 'Any Status') {
      return userRequests.filter(request => request.status === status);
    }
    if (category !== 'All Categories' && status !== 'Any Status') {
      return userRequests.filter(request => request.category === category && request.status === status);
    }
  };

  // Avoid duplicate function calls with useMemo
  const filteredRequests = useMemo(filterRequests, [category, status, userRequests]);

  // Build an array of the available categories
  const categoryOptions = ['All Categories'];
  for (const request of userRequests) {
    if (!categoryOptions.includes(request.category)) {
      categoryOptions.push(request.category);
    }
  }

  // Build an array of the available statuses
  const statusOptions = ['Any Status'];
  for (const request of userRequests) {
    if (!statusOptions.includes(request.status)) {
      statusOptions.push(request.status);
    }
  }

  // Create dropdown select element to filter by category
  const categoryFilter = categoryOptions.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    );
  });

  // Create dropdown select element to filter by status
  const statusFilter = statusOptions.map((status, index) => {
    return (
      <option key={index} value={status}>
        {status}
      </option>
    );
  });

  // Event Handlers
  const resetFilters = function() {
    setCategory('All Categories');
    setStatus('Any Status');
    setSelectedRequestId();
  };

  const handleCategoryChange = function(event) {
    setCategory(event.target.value);
  };

  const handleStatusChange = function(event) {
    setStatus(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Happy Helpers - My help requests</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-100">
        <NavBar name={user.firstName} id={user.id} />
        <div className="flex">
          <RequestSidebar
            status={status}
            category={category}
            resetFilters={resetFilters}
            handleStatusChange={handleStatusChange}
            statusFilter={statusFilter}
            handleCategoryChange={handleCategoryChange}
            categoryFilter={categoryFilter}
            selectedOffers={selectedOffers}
            handleAcceptOffer={handleAcceptOffer}
            selectedRequestId={selectedRequestId}
            selectedRequestStatus={selectedRequestStatus}
            handleRequestComplete={handleRequestComplete}
          />
          <section className='flex flex-col p-2 max-w-6xl'>
            <div className="flex justify-between m-4 text-lg text-teal-700">
              <h1 className="text-[1.5em]">My requests for help</h1>
            </div>
            <RequestList
              requests={filteredRequests}
              selectedRequestId={selectedRequestId}
              setSelectedRequestId={setSelectedRequestId}
              offers={offers}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Data fetching
export const getServerSideProps = async function() {

  /** Capture tasks with addresses:
   *  SELECT tasks.*, addresses.* FROM tasks
   *  JOIN addresses ON tasks.address_id = addresses.id
   * WHERE tasks.user_id = 1
   * ORDER BY start_date desc;
   */
  const userRequests = await prisma.task.findMany({
    where: {
      userId: 2
    },
    include: {
      address: true
    },
    orderBy: {
      startDate: 'desc',
    },
  });

  /** Capture offers with volunteer's user info:
   * SELECT offers.*, users.* FROM offers
   * JOIN users ON offers.user_id = users.id;
   */
  const offers = await prisma.offer.findMany({
    include: {
      user: true
    }
  });

  /** Capture the logged in user:
   * SELECT * FROM users
   * WHERE id = 1;
   */
  const user = await prisma.user.findUnique({
    where: {
      id: 1
    },
    include: {
      address: true
    }
  });

  return {
    props: {
      userRequests: JSON.parse(JSON.stringify(userRequests)),
      offers,
      user: JSON.parse(JSON.stringify(user))
    }
  };
};
