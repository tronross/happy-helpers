//////////////////////
// Profile Page
//////////////////////

import Head from "next/head";
import { useEffect, useState } from 'react';
import prisma from "../../../prisma/.db";

// Component dependencies
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TaskList from "@/components/TaskList";
import EditProfileForm from "@/components/EditProfileForm";

// Helper function dependencies
import addCoordsToTasks from "@/helpers/add-coords-to-tasks";
import addCoordsToUser from "@/helpers/add-coords-to-user";
import addDistanceToTasks from "@/helpers/add-distance-to-tasks";

export default function ProfilePage({ user, userAddress, userOrganizations, upcomingData, pastData }) {
  // HOOKS
  const [userData, setUserData] = useState(user);
  console.log(userData);
  // console.log(`${userAddress.address.address} ${userAddress.address.city} ${userAddress.address.postcode}`);
  const fullAdd = `${userAddress.address} ${userAddress.city} ${userAddress.postcode}`;
  const [fullAddress, setFullAddress] = useState(fullAdd);

  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [editProfileFormData, setEditProfileFormData] = useState({
    firstName: "",
    lastName: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    skills: "",
    // organizations: "",
  });

  console.log(upcomingData);
  console.log(pastData);
  const [upcomingTasksData, setUpcomingTasksData] = useState(upcomingData);
  const [pastTasksData, setPastTasksData] = useState(pastData);

  // HELPER FUNCTIONS
  const toggleEditProfileForm = () => {
    setShowEditProfileForm(!showEditProfileForm);
  };

  // let [orgString, setOrgString] = useState("");
  // useEffect(() => {
  //   let orgStr = "";
  //   userOrganizations.forEach((org, index) => {
  //     if (userOrganizations.length - 1 === index) {
  //       orgStr += `${org.name}.`;
  //     } else {
  //       orgStr += `${org.name}, `;
  //     }
  //   });
  //   setOrgString(orgStr);
  // }, [userOrganizations]);

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
        <NavBar name={userData.firstName} id={userData.id}/>
        <div className="flex">
          <section style={{ margin: "0rem 1.5rem", padding: "1rem 1.5rem", backgroundColor: "rgb(13 148 136)", color: "white", width: "20%" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "1rem", textAlign: "center" }}>Profile Details</h1>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={userData.avatar}
                className="rounded-full"
                alt="Avatar"
              />
            </div>
            <br></br>
            <h1 style={{ fontWeight: "bold" }}>Name:</h1>
            <p>{`${userData.firstName} ${userData.lastName}`}</p>
            <br></br>
            <h1 style={{ fontWeight: "bold" }}>Stars:</h1>
            <p>{userData.stars}</p>
            {user.id === 1 && <>
              <br></br>
              <button className='inline-flex justify-center items-center gap-2 bg-purple-600 px-4 py-1 rounded text-white' type='button' name='Edit Profile' onClick={toggleEditProfileForm}>Edit Profile</button>
              <br></br>
            </>}
            {showEditProfileForm &&
              <EditProfileForm
                userId={userData.id}
                userAddressId={userData.addressId}
                editProfileFormData={editProfileFormData}
                setEditProfileFormData={setEditProfileFormData}
              />
            }
            <br></br>
            <h1 style={{ fontWeight: "bold" }}>Address:</h1>
            <p>{fullAddress}</p><br></br>
            <h1 style={{ fontWeight: "bold" }}>Email:</h1>
            <p>{userData.email}</p><br></br>
            <h1 style={{ fontWeight: "bold" }}>Phone Number:</h1>
            <p>{userData.phone}</p><br></br>
            <h1 style={{ fontWeight: "bold" }}>Skills:</h1>
            <p>{userData.skills}</p><br></br>
            {/* <h1 style={{ fontWeight: "bold" }}>Organizations:</h1>
            <p>{orgString}</p><br></br> */}
            <h1 style={{ fontWeight: "bold" }}>Description:</h1>
            <p>{userData.description}</p><br></br>
          </section>
          <section>
            <h1 style={{ color: "rgb(13 148 136)", fontSize: "1.5rem", fontWeight: "bold" }}>Upcoming Tasks</h1>
            <div style={{ height: "50%" }}>
              <TaskList
                tasks={upcomingTasksData}
              />
            </div>

            <h1 style={{ color: "rgb(13 148 136)", fontSize: "1.5rem", fontWeight: "bold" }}>Past Tasks</h1>
            <div style={{ height: "50%" }}>
              <TaskList
                tasks={pastTasksData}
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// DATA FETCHING
export async function getServerSideProps(context) {

  //////// User table user profile data /////////

  // Get url slug for profile page dynamically from url to be used as userId.
  const { id } = context.query;
  // Get user table profile data and include address data
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      address: true,
      // Organizations: true,
    }
  });

  ///////// Task table user profile data /////////

  // Get tasks where offer is complete for userId
  const userPastOffersComplete = await prisma.offer.findMany({
    where: {
      userId: parseInt(user.id),
      status: 'COMPLETE'
    },
    include: {
      task: true,
    }
  });

  // Get all tasks data for user based on offers complete for the user
  const tasksData = userPastOffersComplete.map((item) => {
    return item.task;
  });
  
  // console.log(tasksData);
  // console.log(user)
  const addresses = await prisma.address.findMany();

  // Add city, latitude, longitude to tasksData
  addCoordsToTasks(tasksData, addresses);

  // Add city, latitude, longitude to user
  addCoordsToUser(user, addresses);

  // Add distance to tasksData
  addDistanceToTasks(tasksData, user);

  // console.log(tasksData);
  // console.log(user)

  
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

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      userAddress: JSON.parse(JSON.stringify(user.address)),
      upcomingData: JSON.parse(JSON.stringify(upcomingData)),
      pastData: JSON.parse(JSON.stringify(pastData)),
    }
  };
}