import { useEffect, useState } from 'react';

export default function Offer({ offer, handleAcceptOffer, handleRequestComplete }) {

  const [showStarChoice, setShowStarChoice] = useState(false);
  const [giveStar, setGiveStar] = useState(false);

  const handleCloseRequest = function() {
    handleRequestComplete(offer.id, offer.user.id, giveStar);
  };

  const handleCancel = function() {
    setShowStarChoice(false);
    setGiveStar(false);
  };


  if (offer.status === 'OPEN') {
    return (
      <div key={offer.id}>
        <p className="text-sm font-semibold text-teal-700">You have an offer from {offer.user.firstName} {offer.user.lastName}!</p>
        <p className="text-sm text-teal-700">LINK TO USER - DO NOT FORGET!</p>
        <p className="text-sm text-teal-700">Description: {offer.user.description}</p>
        <p className="text-sm text-teal-700">Skills: {offer.user.skills}</p>
        <p className="text-sm text-teal-700">Stars: {offer.user.stars}</p>
        <p className="text-sm text-teal-700">(dev) This is offer id: {offer.id}</p>
        <p className="text-sm text-teal-700">(dev) This is offer status: {offer.status}</p>
        <button
          className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
          onClick={() => handleAcceptOffer(offer.id)}
        >
          Accept offer from {offer.user.firstName}
        </button>
      </div>
    );
  }

  if (offer.status === 'PENDING') {
    return (
      <div key={offer.id}>
        <p className="text-sm font-semibold text-teal-700">You have accepted an offer from {offer.user.firstName} {offer.user.lastName}!</p>
        <p className="text-sm text-teal-700">Please remember to mark this request as complete once you have received the help.</p>
        <p className="text-sm text-teal-700">Your feedback is valuable to the community and you will be able to recommend {offer.user.firstName} by giving her a star.</p>
        <p className="text-sm text-teal-700">(dev) Offer id: {offer.id}</p>
        <p className="text-sm text-teal-700">(dev) Offer status: {offer.status}</p>
        {!showStarChoice && (
          <button
            className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
            onClick={() => setShowStarChoice(true)}
          >
            I&apos;VE BEEN HELPED
          </button>
        )}
        {showStarChoice && (
          <>
            <div className="flex items-center justify-center">
              <input
                id="checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-teal-700 rounded"
                onChange={event => setGiveStar(event.target.checked)}
              />
              <label htmlFor="checkbox" className="ml-2 mt-4 text-sm font-medium text-teal-700">Recommend {offer.user.firstName} by giver her a star.</label>
            </div>
            <button
              className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
              onClick={handleCloseRequest}
            >
              CLOSE HELP REQUEST
            </button>
            <button
              className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
              onClick={handleCancel}
            >
              CANCEL
            </button>
          </>
        )}
      </div>
    );
  }

  if (offer.status === 'COMPLETE') {
    return (
      <div key={offer.id}>
        <p className="text-sm font-semibold text-teal-700">This request was completed by {offer.user.firstName} {offer.user.lastName}!</p>
        <p className="text-sm text-teal-700">LINK TO USER - DO NOT FORGET!</p>
        <p className="text-sm text-teal-700">Stars: {offer.user.stars}</p>
      </div>
    );
  }
}