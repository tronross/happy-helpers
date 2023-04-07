import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader'; // https://www.npmjs.com/package/@googlemaps/js-api-loader
import Geocode from "react-geocode"; // https://www.npmjs.com/package/react-geocode

const HomePage = function() {

  Geocode.setApiKey(process.env.NEXT_PUBLIC_API_KEY);
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const getCoordinates = function(address) {

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

  const getDistanceFromAddresses = async function(origin, destination) {

    const originCoords = await getCoordinates(origin);
    const destinationCoords = await getCoordinates(destination);
    console.log('Kilometers', getDistance(originCoords.lat, originCoords.lng, destinationCoords.lat, destinationCoords.lng,'K'));

  };
  getDistanceFromAddresses("Centre Bell", "CN Tower");

  


  // This code displays google maps on the page... will maybe use as a stretch
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    });

    let map;

    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        /*
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
        */
      });

    }); // useEffect
  }); // function

  return (
    <div id="map" ref={googlemap} />
  );
};

export default HomePage;