import { useState } from 'react';
import Link from 'next/link';

export default function Offer({ offer, handleAcceptOffer, handleRequestComplete, selectedRequestStatus, selectedOfferUser, setSelectedOfferUser }) {

  const [showStarChoice, setShowStarChoice] = useState(false);
  const [giveStar, setGiveStar] = useState(false);
  const [starBox, setStarBox] = useState(false);

  const handleCloseRequest = function() {
    console.log(offer.user.id, giveStar);
    handleRequestComplete(offer.user.id, giveStar);
  };

  const handleCancel = function() {
    setShowStarChoice(false);
    setGiveStar(false);
  };

  const handleCheckbox = (event) => {
    setGiveStar(event.target.checked);
    setStarBox(!starBox);
  };

  const completeButtonName = starBox ? "Complete with Star" : "Complete without Star";

  if (offer.status === 'OPEN') {
    return (
      <div key={offer.id} className='relative'>
        <div className='flex items-center border-2 border-violet-300 rounded-full bg-violet-100 mb-2 justify-between hover:cursor-pointer' onClick={() => setSelectedOfferUser(() => {
          return selectedOfferUser === offer.user.id ? null : offer.user.id;
        })}>
          <img
            src={offer.user.avatar}
            className="rounded-full border-[2px] border-violet-300 m-1"
            alt="Avatar"
            width="40rem"
          />
          <p className='text-violet-800 uppercase font-semibold text-sm'>{offer.user.firstName} {offer.user.lastName}</p>
          <div className="mb-[-15px]">
            <svg
              viewBox="0 0 1024 1024"
              height="3em"
              width="3em"
              className="fill-violet-400 mr-2 mt-1"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
            {offer.user.stars < 10 ? <p className="relative top-[-31px] left-[17px] font-semibold text-white ">{offer.user.stars}</p> : <p className="relative top-[-30px] left-[15px] font-semibold text-white">{offer.user.stars}</p>
            }
          </div>
        </div>
        {selectedOfferUser === offer.user.id &&
        <div className='border-2 bg-violet-200 border-violet-300 rounded w-[100%] p-2 absolute top-[-30px] left-[320px] flex min-w-[30em]'>
          <img
            src={offer.user.avatar}
            className="rounded-full border-[2px] border-violet-300 mr-2"
            alt="Avatar"
            width="100rem"
          />
          <div>
            <p className='text-violet-800 uppercase font-semibold text-sm mt-2'>{offer.user.firstName} {offer.user.lastName}</p>
            <div className='flex mt-1'>
              <p className='font-semibold text-violet-800 mr-1'>Skills: </p> 
              <p className="text-violet-800">{offer.user.skills}</p>
            </div>
            <Link href={`/profile-page/${offer.user.id}`} target="_blank" className='text-violet-400 font-semibold uppercase text-[12px] rounded px-2 py-1 absolute top-[4px] left-[307px] hover:text-slate-50'>
              View Profile
            </Link>
            <button className='bg-violet-500 rounded px-2 py-1 absolute top-[80px] left-[310px] hover:bg-violet-700 active:bg-violet-900' onClick={() => handleAcceptOffer(offer.id)}>
              Accept Offer
            </button>
          </div>
        </div>
        }
      </div>
    );
  }

  if (selectedRequestStatus === 'PENDING' && offer.status === 'ACCEPTED') {
    return (
      <div key={offer.id}>

        <div className='text-violet-900 flex flex-col items-center'>
          <div className='flex justify-around border-[1.5px] border-violet-400 rounded-lg p-1 my-2 shadow text-violet-900 w-[272px] h-[114px]'>
            <img
              src={offer.user.avatar}
              className="rounded-full border-[2px] border-violet-300"
              alt="Avatar"
              width="100rem"
              height="100px"
            />
            <div className='flex flex-col mx-2 items-center justify-center'>
              <p className='uppercase text-sm font-semibold'>{offer.user.firstName} {offer.user.lastName}</p>
              <p className='text-center text-sm mt-1'>Skills: {offer.user.skills}</p>
              <Link href={`/profile-page/${offer.user.id}`} target="_blank" className='text-violet-400 font-bold uppercase text-[12px] rounded px-2 py-1 hover:text-slate-50'>
                View Profile
              </Link>
            </div>
          </div>
          <p className="mb-2 text-center">Please remember to mark this request as complete once finished.</p>
          {!showStarChoice && (
            <button
              className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-violet-500 hover:bg-violet-700 active:bg-violet-900 text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center"
              onClick={() => setShowStarChoice(true)}
            >
            Complete Task
            </button>
          )}
          {showStarChoice && (
            <>
              <p className="mb-2 text-center">Your feedback is valuable to the community and you will be able to recommend {offer.user.firstName} to other users by giving a star.</p>
              <div className="flex items-center justify-center mb-4 text-violet-900 mt-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={starBox}
                  className="w-4 h-4 border-violet-600 rounded accent-violet-500 hover:cursor-pointer"
                  onChange={event => handleCheckbox(event)}
                />
                <label htmlFor="checkbox" className="ml-2 text-sm font-medium">Award {offer.user.firstName} with a Star.</label>
              </div>
              <button
                className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-violet-500 hover:bg-violet-700 active:bg-violet-900 text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center"
                onClick={handleCloseRequest}
              >
                {completeButtonName}
              </button>
              <button
                className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-violet-500 hover:bg-violet-700 active:bg-violet-900 rounded font-semibold uppercase tracking-wide text-white text-xs text-center items-center border border-transparent"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (selectedRequestStatus === 'COMPLETE' && offer.status === 'ACCEPTED') {
    return (
      <div key={offer.id}>
        <div className='flex justify-around border-[1.5px] border-violet-400 rounded-lg p-1 my-2 shadow text-violet-900 w-[272px] h-[114px]'>
          <img
            src={offer.user.avatar}
            className="rounded-full border-[2px] border-violet-300"
            alt="Avatar"
            width="100rem"
          />
          <div className='flex flex-col mx-2 items-center justify-center'>
            <p className='uppercase text-sm font-semibold pt-1'>{offer.user.firstName} {offer.user.lastName}</p>
            <p className=' text-sm mt-1 text-center'>Skills: {offer.user.skills}</p>
            <Link href={`/profile-page/${offer.user.id}`} target="_blank" className='text-violet-400 font-semibold uppercase text-[12px] rounded px-2 py-1 hover:text-slate-50'>
              View Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}