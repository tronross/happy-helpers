import { useState } from 'react';
import Link from 'next/link';

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
        <p className="font-bold mb-2 text-base">You have an offer from {offer.user.firstName} {offer.user.lastName}!</p>
        <p className="font-semibold">Description:</p>
        <p>{offer.user.description}</p>
        {offer.user.skills && (
          <>
            <p className="font-semibold mt-2">Skills:</p>
            <p>{offer.user.skills}</p>
          </>
        )}
        <p className="font-semibold my-2">Stars: {offer.user.stars}</p>
        <p className="font-semibold hover:rounded hover:text-gray-100 hover:bg-teal-500">
          <Link href={`/profile-page/${offer.user.id}`}>
            Click here to take a look at {offer.user.firstName}&apos;s profile
          </Link>
        </p>
        <button
          className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-violet-600 hover:bg-white text-white hover:text-violet-600 rounded font-semibold uppercase tracking-wide text-xs text-center items-center"
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
        <p className="mb-2 font-bold uppercase">You have accepted an offer from {offer.user.firstName} {offer.user.lastName}!</p>
        <p className="mb-2">Please remember to mark this request as complete once you have received the help.</p>
        <p className="mb-2">Your feedback is valuable to the community and you will be able to recommend {offer.user.firstName} to other users by giving a star.</p>
        {!showStarChoice && (
          <button
            className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-violet-600 hover:bg-white text-white hover:text-violet-600 rounded font-semibold uppercase tracking-wide text-xs text-center items-center"
            onClick={() => setShowStarChoice(true)}
          >
            I&apos;VE BEEN HELPED
          </button>
        )}
        {showStarChoice && (
          <>
            <div className="flex items-center justify-center mb-4">
              <input
                id="checkbox"
                type="checkbox"
                value=""
                className="w-8 h-8 text-gray-100 bg-violet-500 border-violet-600 rounded accent-violet-500"
                onChange={event => setGiveStar(event.target.checked)}
              />
              <label htmlFor="checkbox" className="ml-2 mt-4 text-sm font-medium text-white">Add a star to recommend {offer.user.firstName} to the community.</label>
            </div>
            <button
              className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-violet-600 hover:bg-white text-white hover:text-violet-600 rounded font-semibold uppercase tracking-wide text-xs text-center items-center"
              onClick={handleCloseRequest}
            >
              CLOSE HELP REQUEST
            </button>
            <button
              className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-violet-600 hover:bg-voilet-900 text-gray-200 hover:text-gray-400 rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-transparent hover:border-gray-400"
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
        <p className="font-semibold">This request was completed by {offer.user.firstName} {offer.user.lastName}!</p>
        <p className="font-semibold mt-2 hover:rounded hover:text-gray-100 hover:bg-teal-500">
          <Link href={`/profile-page/${offer.user.id}`}>
            Click here to take a look at {offer.user.firstName}&apos;s profile
          </Link>
        </p>
      </div>
    );
  }
}