import Request from '../components/Request';
import Link from 'next/link';
import RowButton from "./RowButton";

export default function RequestList({ requests, selectedRequestId, setSelectedRequestId, offers, setSelectedOfferUser }) {

  // Add border to selected request
  const selectedClass = "outline outline-4 outline-violet-400";

  const createRequestItems = function(requestArray) {
    return requestArray.map(request => {

      const nbOffers = offers.filter(offer => offer.taskId === request.id).length;

      if (request.id === selectedRequestId) {
        return (
          <li key={request.id} className="flex-none w-64">
            <Request
              id={request.id}
              name={request.name}
              description={request.description}
              category={request.category}
              user={request.userId}
              image={request.image}
              status={request.status}
              city={request.city}
              address={request.address}
              startDate={request.startDate}
              endDate={request.endDate}
              starred={request.starred}
              selectedClass={selectedClass}
              onClick={setSelectedRequestId}
              nbOffers={nbOffers}
              setSelectedOfferUser={setSelectedOfferUser}
            />
          </li>
        );
      } else {
        return (
          <li key={request.id} className="flex-none w-64">
            <Request
              id={request.id}
              name={request.name}
              description={request.description}
              category={request.category}
              user={request.userId}
              image={request.image}
              status={request.status}
              city={request.city}
              address={request.address}
              startDate={request.startDate}
              endDate={request.endDate}
              starred={request.starred}
              selectedClass=""
              onClick={setSelectedRequestId}
              nbOffers={nbOffers}
              setSelectedOfferUser={setSelectedOfferUser}
            />
          </li>
        );
      }
    });
  };
  // Split requests into categories then convert into lists of Request components
  const openRequests = requests.filter(request => request.status === 'OPEN');
  const openRequestItems = createRequestItems(openRequests);
  const pendingRequests = requests.filter(request => request.status === 'PENDING');
  const pendingRequestItems = createRequestItems(pendingRequests);
  const completeRequests = requests.filter(request => request.status === 'COMPLETE');
  const completeRequestItems = createRequestItems(completeRequests);

  const scrollLeft = (rowType) => {
    const scrollBox = document.querySelector(`#scrollbox${rowType}`);
    scrollBox.scrollLeft -= 260;
  };

  const scrollRight = (rowType) => {
    const scrollBox = document.querySelector(`#scrollbox${rowType}`);
    scrollBox.scrollLeft += 260;
  };

  return (
    <>
      {openRequests.length === 0 && pendingRequests.length === 0 && completeRequests.length === 0 ? (
        <div className="ml-10 mb-2 text-lg text-teal-600 font-fredoka mt-5">
          <h1 className="text-[1.5em] font-semibold mb-2">There are no requests for help to show.</h1>
          <p>You can click <Link href={"/new-task1"} className="underline">here</Link> to request help, or return to the <Link href={"/home"}  className="underline">home page</Link> to volunteer for a task.
          </p>
        </div>
      ) : (
        <div className="ml-10 mb-1 mt-5 text-xl text-teal-600 font-fredoka">
          <h1 className="text-[28px] font-semibold uppercase pl-12">Your Help Requests</h1>
        </div>
      )}
      
      {openRequests.length > 0 && (
        <div className="text-lg text-teal-600 font-fredoka w-[100%] flex flex-col">
          <h1 className="ml-10 mb-2 mt-2 text-[1.2em] pl-12 uppercase font-semibold">Open requests:</h1>
          <div className='flex '>
            <div className=" z-10 ">
              <RowButton svg='prev' onClick={() => scrollLeft('Open')}/>
            </div>
            <ul id="scrollboxOpen" className="flex flex-nowrap overflow-scroll overflow-hidden scroll-smooth scrollbar-hide">
              { openRequestItems }
            </ul>
            <div className="z-10">
              <RowButton  className="mr-[20px]" svg="next" onClick={() => scrollRight('Open')}/>
            </div>
          </div>
        </div>
      )}

      {pendingRequests.length > 0 && (
        <div className="text-lg text-teal-600 font-fredoka w-[100%] flex flex-col">
          <h1 className="ml-10 mb-2 mt-2 text-[1.2em] pl-12 uppercase font-semibold">Pending requests:</h1>
          <div className='flex '>
            <div className=" z-10 ">
              <RowButton svg='prev' onClick={() => scrollLeft('Pending')}/>
            </div>
            <ul id="scrollboxPending" className="flex flex-nowrap overflow-scroll overflow-hidden scroll-smooth scrollbar-hide">
              { pendingRequestItems }
            </ul>
            <div className="z-10">
              <RowButton className="mr-[20px]" svg="next" onClick={() => scrollRight('Pending')}/>
            </div>
          </div>
        </div>
      )}

      {completeRequests.length > 0 && (
        <div className="text-lg text-teal-600 font-fredoka w-[100%] flex flex-col">
          <h1 className="ml-10 mb-2 mt-2 text-[1.2em] pl-12 uppercase font-semibold">Completed requests:</h1>
          <div className='flex '>
            <div className=" z-10 ">
              <RowButton svg='prev' onClick={() => scrollLeft('Completed')}/>
            </div>
            <ul id="scrollboxCompleted" className="flex flex-nowrap overflow-scroll overflow-hidden scroll-smooth scrollbar-hide">
              { completeRequestItems }
            </ul>
            <div className="z-10">
              <RowButton className="mr-[20px]" svg="next" onClick={() => scrollRight('Completed')}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}