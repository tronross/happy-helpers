import EditProfileForm from "./EditProfileForm";

export default function ProfileSidebar({userData, showEditProfileForm, toggleEditProfileForm, editProfileFormData ,setEditProfileFormData}) {
  return (
    <aside className="rounded-3xl ml-6 p-4 pt-20 mt-[73px] shadow-xl bg-violet-200 w-[320px] text-teal-800 border-violet-300 border-2">
            <div className="flex justify-center mb-3 mt-2">
          <p className="uppercase text-lg font-bold">{`${userData.firstName} ${userData.lastName}`}</p>
          </div>
            <div className="absolute top-[0px] left-[110px]" style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={userData.avatar}
                className="rounded-full border-[7px] border-violet-200 shadow-xl"
                alt="Avatar"
                width="150rem"
                
              />
            </div>
            <br></br>
            <h1 style={{ fontWeight: "bold" }}>Stars:</h1>
            <p>{userData.stars}</p>
            {userData.id === 1 && <>
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
            <p>{userData.address.address}</p>
            <p>{userData.address.city}</p>
            <p>{userData.address.postcode}</p><br></br>
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
          </aside>
  )
}