import EditProfileForm from "./EditProfileForm";

export default function ProfileSidebar({userData, showEditProfileForm, toggleEditProfileForm, editProfileFormData ,setEditProfileFormData}) {
  return (
    <aside className="rounded-3xl ml-6 p-6 pt-20 mt-[73px] shadow-xl bg-violet-200 w-[320px] text-violet-900 border-violet-300 border-2 sticky top-[155px] ">
      {userData.id === 1 && <>
        <svg
          viewBox="0 0 24 24"
          height="1.5em"
          width="1.5em"
          onClick={toggleEditProfileForm}
          className="absolute top-[12px] left-[280px] hover:cursor-pointer fill-violet-400"
          >
          <path d="M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
          <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
        </svg>
      </>}
      <div className="absolute top-[-80px] left-[85px] flex justify-center">
        <img
          src={userData.avatar}
          className="rounded-full border-[7px] border-violet-200 shadow-xl"
          alt="Avatar"
          width="150rem"
        />
      </div>
      {!showEditProfileForm && <>
      <div>
      <div className="flex justify-center mb-3 mt-2">
        <p className="uppercase text-lg font-semibold">
          {`${userData.firstName} ${userData.lastName}`}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <div className="mb-[-15px]">
          <svg
            viewBox="0 0 1024 1024"
            height="3em"
            width="3em"
            className="fill-violet-400"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
          {userData.stars < 10 ?  <p className="relative top-[-36px] left-[19px] font-semibold text-white"> {userData.stars}</p> : <p className="relative top-[-35px] left-[16px] font-semibold text-white">  {userData.stars}</p>
          } 
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2 flex flex-col items-center">
          <h1 className="font-semibold">About:</h1>
          <p className="text-center">{userData.description}</p>
        </div>

        <div className="my-2 flex flex-col items-center">
          <h1 className="font-semibold">Skills:</h1>
          <p className="text-center">{userData.skills}</p>
        </div>
      {userData.id === 1 && <>
        <div className="flex flex-col items-center my-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <div className="flex flex-col items-center">
            <div className="flex">
              <p className="pr-2">{userData.address.address}, </p>
              <p className="pr-2">{userData.address.city}</p>
            </div>
            <div>
              <p>{userData.address.postcode}</p>
            </div>
          </div>
        </div>




        <div className="flex flex-col items-center my-2">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.4em"
            width="1.4em"
          >
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
          </svg>
          <p>{userData.email}</p>
        </div>



        <div className="flex flex-col items-center my-2">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
          >
            <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
          </svg>
          <p>{userData.phone}</p>
        </div>
        </>}
      </div>
      </div>
      </>}
      {showEditProfileForm && <>
        <div className="relative">
        {showEditProfileForm &&
          <EditProfileForm
            userId={userData.id}
            userAddressId={userData.addressId}
            editProfileFormData={editProfileFormData}
            setEditProfileFormData={setEditProfileFormData}
          />
        }
      </div>
      </>}
    </aside>
  )
}