export default function Request(props) {

  // Dates are sent as strings through props, so need to be formatted
  const startDate = new Date(props.startDate);
  const className = `${props.selectedClass} border-1 shadow-lg m-4 bg-white rounded-lg relative`;

  // Colour-code the status in a pill button style
  const getStatusStyle = function(status) {
    switch (status) {
    case 'OPEN':  return "inline-block my-4 min-w-[6em] max-w-[8em] h-[2em] leading-none bg-teal-200 text-teal-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
    case 'PENDING': return "inline-block my-4 min-w-[6em] max-w-[8em] h-[2em] leading-none bg-violet-200 text-violet-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
    case 'COMPLETE': return "inline-block my-4 min-w-[6em] max-w-[8em] h-[2em] leading-none bg-amber-200 text-amber-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
    }
  };
  
  const statusStyle = getStatusStyle(props.status);

  return (
    <div className={className} onClick={() => props.onClick(props.id)}>
      {props.nbOffers > 0 && props.status === 'OPEN' && (
        <div className="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
          {props.nbOffers}
        </div>
      )}
      {props.starred && props.status === 'COMPLETE' && (
        <svg
          className="absolute -top-4 -right-3 h-8 w-8 stroke-yellow-300 hover:fill-yellow-300 hover:cursor-pointer fill-yellow-300"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <title>You have given the volunteer for this task a star!</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )}
      <img src={props.image} alt={props.name} className="mb-2 rounded-t-lg"></img>
      <section className="px-4">
        <h5 className="text-xl leading-tight text-teal-700 line-clamp-2 h-16">{props.name}</h5>
        <p className="mb-2 text-base text-teal-700">{props.address.city}</p>
        <p className="text-base text-teal-700 font-bold">{props.category}</p>
        <p className="text-sm text-teal-700 font-bold">
          {startDate.toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})}
        </p>
        <p className="text-base text-teal-700 line-clamp-2 h-18">Id (dev) {props.id} {props.description}</p>
        <p className="text-base text-teal-700">nbOffers (dev) {props.nbOffers}</p>
        <p className="text-base text-teal-700">starred (dev) {props.starred && 'starred'}</p>
        <div className="my-4 flex justify-between items-center">
          <div className={statusStyle}>
            {props.status}
          </div>
        </div>
      </section>
    </div>
  );
}