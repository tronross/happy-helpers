export default function addCoordsToUser(user, addresses) {
    const userAddress = addresses[user.addressId]

    const latitude = userAddress.latitude;
    const longitude = userAddress.longitude;
    const city = userAddress.city
    console.log(latitude, longitude)

    user.latitude = `${latitude}`;
    user.longitude = `${longitude}`;
    user.city = city;

    // console.log(user)
  }
