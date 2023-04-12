export default function Request(props) {

  // test code
  // console.log('props', props);

  // Dates are sent as strings through props, so need to be formatted
  const startDate = new Date(props.startDate);

  return (
    <div className="border-1 shadow-lg m-4 bg-white rounded-lg">
      <img src={props.image} alt={props.name} className="mb-2 rounded-t-lg"></img>
      <section className="px-4">
        <h5 className=" text-xl leading-tight text-teal-700">
          {props.name}
        </h5>
        <p className="mb-2 text-base text-teal-700">
          {props.address.city}
        </p>
        <p className="text-base text-teal-700 font-bold">
          {props.category}
        </p>
        <p className="text-sm text-teal-700 font-bold">
          {startDate.toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})}
        </p>
        <p className="text-base text-teal-700 line-clamp-2 h-20">
          {props.description}
        </p>
        <p className="text-sm text-teal-700">
          Status: <span className="font-bold">{props.status}</span>
        </p>
      </section>
      <div className="p-4 text-sm text-gray-700 flex justify-between items-center">
        <button className="inline-block w-[8em] h-[2em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center border border-teal-700 hover:border-transparent">
          Edit
        </button>
        <svg
          className="h-7 w-7 text-teal-500 hover:fill-current hover:cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        <svg
          className="h-9 w-9 stroke-yellow-300 hover:fill-yellow-300 hover:cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>

      </div>
    </div>
  );
}