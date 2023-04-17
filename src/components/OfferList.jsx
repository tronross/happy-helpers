import Offer from '../components/Offer';
import { useState, useEffect } from 'react';


export default function OfferList({ selectedOffers, handleAcceptOffer, handleRequestComplete, selectedRequestStatus }) {

  // selectedOffers not being updated in state... needs useEffect
  const [currentOffers, setCurrentOffers] = useState([]);
  useEffect(() => {
    setCurrentOffers(selectedOffers);
  }, [selectedOffers]);

  // Conditional display depending on the request status
  const getOffers = function() {
    if (selectedRequestStatus === 'OPEN') {
      return currentOffers.map((offer, index) => {
        return (
          <li key={index}>
            <Offer offer={offer} handleAcceptOffer={handleAcceptOffer} />
          </li>
        );
      });
    }

    if (selectedRequestStatus === 'PENDING') {
      const acceptedOffer = selectedOffers.find((offer) => offer.status === 'PENDING');
      return (
        <li key={acceptedOffer.id}>
          <Offer offer={acceptedOffer} handleRequestComplete={handleRequestComplete} />
        </li>
      );
    }

    if (selectedRequestStatus === 'COMPLETE') {
      const acceptedOffer = selectedOffers.find((offer) => offer.status === 'COMPLETE');
      return (
        <li key={acceptedOffer.id}>
          <Offer offer={acceptedOffer} />
        </li>
      );
    }
  };

  const offers = getOffers();

  return (
    <ul className="min-w-400 flex-col justify-start content-start mt-4 text-white text-sm">
      {offers}
    </ul>
  );
}