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
        <p className="text-base text-teal-700 font-bold">
          {startDate.toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
        </p>
        <p className="text-base text-teal-700">
          {props.description}
        </p>
        <p className="mt-4 text-sm text-teal-700">
          Status: <span className="font-bold">{props.status}</span>
        </p>
      </section>
      <div className="p-4 text-sm text-gray-700 flex justify-between items-center">
        <button className="inline-block w-[8em] h-[2em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center border border-teal-700 hover:border-transparent">
          More info
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
      </div>
    </div>
  );
}