//////////////////////
// Profile Page
//////////////////////

import Head from "next/head";
import { useEffect, useState } from 'react';
import axios from "axios";
import { PrismaClient } from '@prisma/client';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// Component dependencies
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import TaskList from "@/components/TaskList";
import EditProfileForm from "@/components/EditProfileForm";

export default function ProfilePage({ user, userAddress, upcomingData, pastData }) {
  // HOOKS
  const [userData, setUserData] = useState(user.user);
  // console.log(user.user);
  // console.log(`${userAddress.address.address} ${userAddress.address.city} ${userAddress.address.postcode}`);
  const fullAdd = `${userAddress.address.address} ${userAddress.address.city} ${userAddress.address.postcode}`;
  const [fullAddress, setFullAddress] = useState(fullAdd);

  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [editProfileFormData, setEditProfileFormData] = useState({
    firstName: "",
    lastName: "",
    description: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    // skills: "",
    // organizations: "",
  });

  // console.log(upcomingData)
  // console.log(pastData)
  const [upcomingTasksData, setUpcomingTasksData] = useState(upcomingData);
  const [pastTasksData, setPastTasksData] = useState(pastData);

  // HELPER FUNCTIONS
  const toggleEditProfileForm = () => {
    setShowEditProfileForm(!showEditProfileForm);
  };

  // TEMPLATE
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-100">
        <NavBar />
        <div className="flex">
          <section className="w-[1500px] h-screen sticky top-0">
            <h1>{`${userData.firstName} ${userData.lastName}`}</h1><br></br>
            <Button buttonName='Edit Profile' onClick={toggleEditProfileForm} />
            {showEditProfileForm &&
              <EditProfileForm
                userAddressId={userData.addressId}
                editProfileFormData={editProfileFormData}
                setEditProfileFormData={setEditProfileFormData}
              />
            }
            <br></br>
            <h1>Address:</h1>
            <p>{fullAddress}</p><br></br>
            <h1>Phone Number:</h1>
            <p>{userData.phone}</p><br></br>
            <h1>Skills:</h1>
            <p>Tech support<br></br>
              Lawn Mowing<br></br>
              Cooking<br></br>
              Carpentry</p><br></br>
            <h1>Organizations:</h1>
            <p>Meals on Wheels</p><br></br>
            <h1>Description:</h1>
            <p>{userData.description}</p><br></br>
          </section>
          <section>
            <h1>Your Upcoming tasks</h1>
            <div className='relative flex items-center'>
              <MdChevronLeft size={250} />
              <div className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                <TaskList tasks={upcomingTasksData} />
              </div>
              <MdChevronRight size={250} />
            </div>

            <h1>Past Tasks</h1>
            <TaskList tasks={pastTasksData} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// DATA FETCHING
export async function getServerSideProps() {
  // User table profile data
  const user = await axios.get(`http://localhost:3000/api/users/${1}`);
  // console.log('userAddressId', user.data.user.addressId)
  // console.log('USER:', user.data.user.addressId)
  // User address data

  // Address table profile data
  const userAddress = await axios.get(`http://localhost:3000/api/addresses/${user.data.user.addressId}`);
  // console.log(userAddress)

  // Task table profile data
  const prisma = new PrismaClient();
  // Get tasks where offer is complete for user
  const userPastOffersComplete = await prisma.offer.findMany({
    where: {
      userId: parseInt(user.data.user.id),
      status: 'COMPLETE'
    }
  });
  // console.log('userPastOffersComplete', userPastOffersComplete);
  // const tasksObject = [];

  // Get all tasks data for user based on offers complete for the user
  // console.log('userPastOffersComplete', userPastOffersComplete);
  const tasksArr = userPastOffersComplete.map((item) => {
    return axios.get(`http://localhost:3000/api/tasks/${item.taskId}`);
  });
  const res = await Promise.all(tasksArr);

  // Extract tasks data
  const tasksData = res.map((item) => {
    // console.log(item, 'ITEM');
    return item.data.task;
  });
  // console.log(tasksData, 'TASKS-DATA');

  // Extract upcoming tasks data
  const upcomingData = tasksData.filter(item => {
    return item.status === 'PENDING';
  });
  // console.log(upcomingData, 'upcomingData');

  // Extract past tasks data
  const pastData = tasksData.filter(item => {
    return item.status === 'COMPLETE';
  });
  // console.log(pastData, 'pastData');

  // console.log(user.data, 'USER')
  console.log(userAddress.data, 'userAddress');

  return {
    props: {
      user: user.data,
      userAddress: userAddress.data,
      upcomingData,
      pastData
    }
  };
}