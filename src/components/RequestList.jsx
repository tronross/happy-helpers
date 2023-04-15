import Request from '../components/Request';

export default function RequestList({ requests, selectedRequestId, setSelectedRequestId, offers }) {

  const selectedClass = "outline outline-4 outline-teal-600";

  const requestItems = requests.map(request => {

    const nbOffers = offers.filter((offer) => offer.taskId === request.id).length;

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

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">
      { requestItems }
    </ul>
  );
}