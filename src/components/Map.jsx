import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader'; // https://www.npmjs.com/package/@googlemaps/js-api-loader
import Geocode from "react-geocode"; // https://www.npmjs.com/package/react-geocode

export default function Map(props) {

  Geocode.setApiKey(process.env.NEXT_PUBLIC_API_KEY);
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const getCoordinates = function (address) {

    return Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        return { lat, lng };
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const getDistance = (lat1, lon1, lat2, lon2, unit) => {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist;
  };

  const getDistanceFromAddresses = async function (origin, destination) {

    const originCoords = await getCoordinates(origin);
    const destinationCoords = await getCoordinates(destination);
    console.log('Kilometers', getDistance(originCoords.lat, originCoords.lng, destinationCoords.lat, destinationCoords.lng, 'K'));

  };

  // Convert filteredTasks to Marker-appropriate objects
  const tasks = props.tasks;
  const taskMarkers = tasks.map(task => {
    const lat = task.address.latitude;
    const lng = task.address.longitude;
    const title = task.name;
    const index = task.id;
    const addressId = task.addressId;
    const userId = task.userId;
    const category = task.category;
    const description = task.description;
    const img = task.image;
    const date = new Date(task.startDate).toISOString().substring(0, 10);

    return {
      lat,
      lng,
      title,
      index,
      addressId,
      userId,
      category,
      description,
      img,
      date
    }
  })


  // This code displays google maps on the page
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    });


    loader.load().then(() => {
      const google = window.google;
      const map = new google.maps.Map(googlemap.current, {
        center: { lat: 43.68856622704429, lng: -79.43367264421084 },
        zoom: 12.9,
      });

      const homeMarker = {
        path: "m12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7m2.5 11-2.5-1.5-2.5 1.5.7-2.8-2.2-1.9 2.9-.2 1.1-2.7 1.1 2.6 2.9.3-2.2 1.9z",
        fillOpacity: 0.6,
        fillColor: "purple",
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        labelOrigin: new google.maps.Point(11, 24)
      };

      // Position map to be centered over "logged-in user's" location
      new google.maps.Marker({
        position: { lat: 43.68739440726955, lng: -79.42498784917888 },
        icon: homeMarker,
        map,
        label: {
          text: "Anderson",
          fontWeight: "bold",
          fontSize: "18px"
        }
      });

      const addressIds = [];
      // Add Markers to map for each Task
      taskMarkers.forEach(task => {
        const addressId = task.addressId;
        const lat = Number(task.lat);
        const lng = Number(task.lng);
        const title = task.title;
        const category = task.category;
        const date = task.date;
        const description = task.description;
        const taskId = task.index;
        const img = task.img;

        // Prevent overlapping markers(tasks); prevent tasks overlapping home marker. Create markers
        if (!addressIds.includes(addressId) && task.userId != 1) {
          const marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            label: {
              text: title,
              fontWeight: "bold"
            },
            map,
            zIndex: task.index,
            taskId
          });

          const infoWindow = new google.maps.InfoWindow({
            ariaLabel: title,
            maxWidth: 250
          })

          // Define content for infoWindows
          infoWindow.setContent(`
          <article>
            <section style="text-align: center;">
              <img src=${img}
                width=220;
              />
            </section>
            <h2 style="font-weight: bold; font-size: 1.5em;">${title}</h2>
              <h3 style="font-weight: bold; font-size: 1.2em;">${category}</h3>
              <h4 style="font-weight: bold; font-size: 0.9em;">${date}</h4>
            <p style="font-weight: bold; font-size: 1em;">${description}</p>
          </article>`
          );

          // Marker event handlers for show/hide infoWindows and click-throughs to tasks
          marker.addListener("mouseover", () => {
            infoWindow.open({
              anchor: marker,
              map,
            });
          })

          marker.addListener("mouseout", () => {
            infoWindow.close()
          })

          marker.addListener("click", () => {
            window.location = (`/task/${taskId}`)
          })

          // Array of userIds to prevent multiple markers rendered over one another at the same location
          !addressIds.includes(addressId) && addressIds.push(addressId);
        }
      })
    }); // useEffect
  }); // function

  return (
    <div id="map" ref={googlemap} />
  );
};
