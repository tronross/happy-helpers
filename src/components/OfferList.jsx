import Offer from '../components/Offer';
import { useState, useEffect } from 'react';


export default function OfferList({ selectedOffers, handleAcceptOffer, handleRequestComplete, selectedRequestStatus, selectedOfferUser, setSelectedOfferUser }) {

  const header = function(status) {
    switch(status) {
      case "OPEN": return "OFFERS:"
      case "PENDING": return "YOU HAVE ACCEPTED AN OFFER"
      case "COMPLETE": return "THIS TASK WAS COMPLETED"
    }
  }
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
            <Offer
              offer={offer}
              selectedRequestStatus={selectedRequestStatus}
              handleAcceptOffer={handleAcceptOffer} 
              selectedOfferUser={selectedOfferUser}
              setSelectedOfferUser={setSelectedOfferUser}
            />
          </li>
        );
      });
    }

    if (selectedRequestStatus === 'PENDING') {
      const acceptedOffer = selectedOffers.find(offer => offer.status === 'ACCEPTED');

      return (
        <li key={acceptedOffer.id}>
          <Offer
            offer={acceptedOffer}
            selectedRequestStatus={selectedRequestStatus}
            handleRequestComplete={handleRequestComplete}
          />
        </li>
      );
    }

    if (selectedRequestStatus === 'COMPLETE') {
      const acceptedOffer = selectedOffers.find(offer => offer.status === 'ACCEPTED');
      return (
        <li key={acceptedOffer.id}>
          <Offer
            offer={acceptedOffer}
            selectedRequestStatus={selectedRequestStatus}
            handleRequestComplete={handleRequestComplete}
          />
        </li>
      );
    }
  };
  const offers = getOffers();

  const divClass = selectedRequestStatus !== "OPEN" ? "flex flex-col items-center" : "flex flex-col"

  const headerClass = selectedRequestStatus !== "OPEN" ? " text-base font-bold mt-4" : " text-base font-bold mt-4 ml-2"


  return (
    <div className={divClass}>
      <h2 className={headerClass}>{header(selectedRequestStatus)}</h2>
      <ul className="min-w-400 flex-col justify-start content-start mt-4 text-white text-sm">
        {offers}
      </ul>
    </div>
  );
}