import Request from '../components/Request';

export default function RequestList({ requests }) {

  const requestItems = requests.map(request => {
    return (
      <li key={request.id}>
        <Request
          key={request.id}
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
        />
      </li>
    );
  });

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">
      { requestItems }
    </ul>
  );
}