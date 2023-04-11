export default function addCoordsToUser(user, addresses) {
    const userAddress = addresses[user.addressId]

    const latitude = userAddress.latitude;
    const longitude = userAddress.longitude;
    console.log(latitude, longitude)

    user.latitude = `${latitude}`;
    user.longitude = `${longitude}`;

    // console.log(user)
  }
