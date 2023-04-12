export default function addCoordsToUser(user, addresses) {
  addresses.sort((a, b) => a.id - b.id);

  const userAddress = addresses[user.addressId - 1]

  const latitude = userAddress.latitude;
  const longitude = userAddress.longitude;
  const city = userAddress.city
  console.log(latitude, longitude)

  user.latitude = `${latitude}`;
  user.longitude = `${longitude}`;
  user.city = city;

  // console.log(user)
}
