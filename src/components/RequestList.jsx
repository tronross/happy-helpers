import Request from '../components/Request';
import Link from 'next/link';

export default function RequestList({ requests, selectedRequestId, setSelectedRequestId, offers }) {

  // Add border to selected request
  const selectedClass = "outline outline-4 outline-teal-600";

  const createRequestItems = function(requestArray) {
    return requestArray.map(request => {

      const nbOffers = offers.filter(offer => offer.taskId === request.id).length;

      if (request.id === selectedRequestId) {
        return (
          <li key={request.id}>
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
          <li key={request.id}>
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

  return (
    <>
      {openRequests.length === 0 && pendingRequests.length === 0 && completeRequests.length === 0 ? (
        <div className="ml-4 mb-2 text-lg text-teal-700">
          <h1 className="text-[1.5em] font-bold">You have not made any requests for help yet.</h1>
          <p>Click<Link href={"/new-task1"}> here </Link> to request help, or return to the<Link href={"/home"}> home page </Link>to volunteer for a task.
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
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">
            { openRequestItems }
          </ul>
        </div>
      )}

      {pendingRequests.length > 0 && (
        <div className="text-lg text-teal-700">
          <h1 className="ml-4 mb-2 mt-2 text-[1.5em]">Pending requests:</h1>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">
            { pendingRequestItems }
          </ul>
        </div>
      )}

      {completeRequests.length > 0 && (
        <div className="text-lg text-teal-700">
          <h1 className="ml-4 mb-2 mt-2 text-[1.5em]">Completed requests:</h1>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">
            { completeRequestItems }
          </ul>
        </div>
      )}
    </>
  );
}