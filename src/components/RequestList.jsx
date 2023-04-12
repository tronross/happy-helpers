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
        />
      </li>
    );
  });

  return (
    <>
      {/* The header will be different to the PageHeader component in the home page */}
      <div className="flex justify-between m-4 text-lg text-teal-700">
        <h1 className="text-[1.5em]">My requests for help</h1>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">
        { requestItems }
      </ul>
    </>
  );
}