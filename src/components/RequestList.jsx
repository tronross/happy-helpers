import Request from '../components/Request';
import Link from 'next/link';
import RowButton from "./RowButton";

export default function RequestList({ requests, selectedRequestId, setSelectedRequestId, offers }) {

  // Add border to selected request
  const selectedClass = "outline outline-4 outline-teal-600";

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
        <div className="ml-4 mb-2 text-lg text-teal-700">
          <h1 className="text-[1.5em] font-bold mb-2">There are no requests for help to show.</h1>
          <p>You can click <Link href={"/new-task1"} className="underline">here</Link> to request help, or return to the <Link href={"/home"}  className="underline">home page</Link> to volunteer for a task.
          </p>
        </div>
      ) : (
        <div className="ml-4 mb-2 text-lg text-teal-700">
          <h1 className="text-[1.5em] font-bold">My requests for help</h1>
        </div>
      )}
      
      {openRequests.length > 0 && (
        <div className="text-lg text-teal-700">
          <h1 className="ml-4 mb-2 mt-2 text-[1.5em]">Open requests:</h1>
          <div className="absolute left-[260px] z-10">
            <RowButton svg='prev' onClick={() => scrollLeft('Open')}/>
          </div>
          <div className="absolute right-[0px] z-10">
            <RowButton svg="next" onClick={() => scrollRight('Open')}/>
          </div>
          <ul id="scrollboxOpen" className="flex flex-nowrap overflow-x-auto scrollbar-hide">
            { openRequestItems }
          </ul>
        </div>
      )}

      {pendingRequests.length > 0 && (
        <div className="text-lg text-teal-700">
          <h1 className="ml-4 mb-2 mt-2 text-[1.5em]">Pending requests:</h1>
          <div className="absolute left-[260px] z-10">
            <RowButton svg='prev' onClick={() => scrollLeft('Pending')}/>
          </div>
          <div className="absolute right-[0px] z-10">
            <RowButton svg="next" onClick={() => scrollRight('Pending')}/>
          </div>
          <ul id="scrollboxPending" className="flex flex-nowrap overflow-x-auto scrollbar-hide">
            { pendingRequestItems }
          </ul>
        </div>
      )}

      {completeRequests.length > 0 && (
        <div className="text-lg text-teal-700">
          <h1 className="ml-4 mb-2 mt-2 text-[1.5em]">Completed requests:</h1>
          <div className="absolute left-[260px] z-10">
            <RowButton svg='prev' onClick={() => scrollLeft('Complete')}/>
          </div>
          <div className="absolute right-[0px] z-10">
            <RowButton svg="next" onClick={() => scrollRight('Complete')}/>
          </div>
          <ul id="scrollboxComplete" className="flex flex-nowrap overflow-x-auto scrollbar-hide">
            { completeRequestItems }
          </ul>
        </div>
      )}
    </>
  );
}