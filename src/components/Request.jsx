// @refresh reset
export default function Request(props) {

  // Dates are sent as strings through props, so need to be formatted
  const startDate = new Date(props.startDate);
  const className = `${props.selectedClass} h-[19.5em] border-1 shadow-lg m-4 bg-white rounded-lg relative hover:cursor-pointer flex flex-col justify-between`;

  // Colour-code the status in a pill button style
  const getStatusStyle = function(status) {
    switch (status) {
    case 'OPEN':  return "bg-teal-200 text-teal-600";
    case 'PENDING': return "bg-violet-200 text-violet-600";
    case 'COMPLETE': return "bg-amber-200 text-amber-600";
    }
  };
  
  const statusStyle = `inline-block my-2 min-w-[6em] max-w-[8em] h-[2em] leading-none ${getStatusStyle(props.status)} rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center`;

  const handleTaskClick = () => {
    props.onClick(props.id);
    props.setSelectedOfferUser(null);
  };

  return (
    <div className={className} onClick={handleTaskClick}>
      {props.nbOffers > 0 && props.status === 'OPEN' && (
        <div className="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-semibold text-white bg-violet-500 border-2 border-white rounded-full -top-2 -right-2">
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
      <section className="px-4 text-teal-600 text-base">
        <h5 className="mb-1 text-xl leading-tight line-clamp-1">{props.name}</h5>
        <p className="text-sm">
          {startDate.toLocaleString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})}
        </p>
        <p className="mb-1 text-sm font-normal">
          {startDate.toLocaleString('en-us', {hour:'2-digit', minute: '2-digit'})}
        </p>
        <div>
          <p className="h-12 line-clamp-2">
            {props.description}
          </p>
        </div>
        <div className="my-2 flex justify-between items-center">
          <div className={statusStyle}>
            <p className="p-3">{props.status}</p>
          </div>
        </div>
      </section>
    </div>
  );
}