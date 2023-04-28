// @refresh reset
import { useState, useEffect } from 'react';
import prisma from '../../prisma/.db';
import axios from "axios";
import { useRouter } from "next/navigation";

// Component dependencies
import RequestList from '@/components/RequestList';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import RequestSideBar from '@/components/RequestSideBar';

// Custom hooks
import filterRequests from '../helpers/filter-requests';

export default function UserTasks({ userRequests, offers, user }) {

  // Hooks
  const [selectedRequestId, setSelectedRequestId] = useState();
  const [selectedOffers, setSelectedOffers] = useState([]);
  const {
    category,
    status,
    filteredRequests,
    categoryFilter,
    statusFilter,
    resetFilters,
    handleCategoryChange,
    handleStatusChange
  } = filterRequests(userRequests, setSelectedRequestId);
  const [selectedOfferUser, setSelectedOfferUser] = useState(null);

  // Used to force render page (all state is lost)
  const router = useRouter();

  // Track the status of the currently selected request and it's offer status
  const [selectedRequestStatus, setSelectedRequestStatus] = useState();
  useEffect(() => {
    if (selectedRequestId) {
      const selectedRequest = userRequests.find(request => request.id === selectedRequestId);
      setSelectedRequestStatus(selectedRequest.status);
    }
  }, [selectedRequestId, userRequests]);

  // Keep selected request id in local memory during a router.refresh() or page change
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
   * 1. In tasks table: set task status as pending where id = selectedTask
   * 2. In offers table: set winning offer status as accepted where id = offer.id
   *    and set all losing offers status as denied
   * 3. In messages table: send accepted message to winner and denied messages to all losers
   */
  const handleAcceptOffer = async function (offerId) {
    await axios.patch(`http://localhost:3000/api/offers/${offerId}`, { offerArray: selectedOffers });
    await axios.patch(`http://localhost:3000/api/tasks/${selectedRequestId}`, { newStatus: 'PENDING' });

    for (const offer of selectedOffers) {
      const params = {
        userId: offer.user.id,
        type: offer.id === offerId ? 'ACCEPTED' : 'DENIED',
        cpId: user.id,
        cpName: `${user.firstName} ${user.lastName}`,
        taskName: userRequests.find(request => request.id === selectedRequestId).name
      };
      await axios.post(`http://localhost:3000/api/messages/`, { params });
    }
    localStorage.setItem("selectedRequestId", selectedRequestId);
    router.refresh();
  };

  /* When user clicks on request complete button:
   * In tasks table: set task status as closed where id = selectedTask
   * There is nothing to change in the offers table
   * If the volunteer has received a star, add it to their user where user.id = offers.user_id
   *  and send the volunteer a notification
   */
  const handleRequestComplete = async function (volunteerId, giveStar) {
    if (giveStar) {
      await axios.patch(`http://localhost:3000/api/tasks/${selectedRequestId}`, { newStatus: 'COMPLETE', starred: true });
      await axios.patch(`http://localhost:3000/api/users/${volunteerId}`, { field: 'stars' });

      const params = {
        userId: volunteerId,
        type: 'STAR',
        cpId: user.id,
        cpName: `${user.firstName} ${user.lastName}`,
        taskName: userRequests.find(request => request.id === selectedRequestId).name
      };
      await axios.post(`http://localhost:3000/api/messages/`, { params });
    } else {
      await axios.patch(`http://localhost:3000/api/tasks/${selectedRequestId}`, { newStatus: 'COMPLETE' });
    }
    localStorage.setItem("selectedRequestId", selectedRequestId);
    router.refresh();
  };

  // Create an array of offers received for a task when it is selected
  useEffect(() => {
    if (selectedRequestId) {
      const offersReceived = offers.filter(offer => offer.taskId === selectedRequestId);
      setSelectedOffers(offersReceived);
    }
  }, [selectedRequestId, offers]);

  return (
    <>
      <main className='full-height'>
        <NavBar name={user.firstName} id={user.id} />

        <div className="flex w-[100%] justify-start relative">
          <div className='z-20'>
            <RequestSideBar
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
              selectedOfferUser={selectedOfferUser}
              setSelectedOfferUser={setSelectedOfferUser}
            />
          </div>
          <div className='flex flex-col w-[100%] ml-4 overflow-hidden'>
            <RequestList
              requests={filteredRequests}
              selectedRequestId={selectedRequestId}
              setSelectedRequestId={setSelectedRequestId}
              offers={offers}
              setSelectedOfferUser={setSelectedOfferUser}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps = async function () {

  /** Capture tasks with addresses:
   *  SELECT tasks.*, addresses.* FROM tasks
   *  JOIN addresses ON tasks.address_id = addresses.id
   * WHERE tasks.user_id = 1
   * ORDER BY start_date desc;
   */
  const userRequests = await prisma.task.findMany({
    where: {
      userId: 1
    },
    include: {
      address: true
    },
    orderBy: {
      startDate: 'desc'
    }
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
