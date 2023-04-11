export default function Task(props) {
  console.log(props)
  return (
  <div className="border-1 shadow-lg m-4 bg-white rounded-lg">
    <img src={props.image} alt={props.name} className="mb-2 rounded-t-lg"></img>
    <section className="px-4">
      <h5 className=" text-xl leading-tight text-teal-700">
      {props.name}
    </h5>
    <p className="mb-2 text-base text-teal-700">
    {props.city}
    </p>
    <p className="mb-2 text-base text-teal-700">
    {`Distance: ${props.distance}km`}
    </p>
    <p className=" text-base text-teal-700">
    {props.description}
    </p>
    <p className="mb-2 text-base text-teal-700">
    {`Date: ${props.startDate}`}
    </p>
    </section>
    <div className="p-4 text-sm text-gray-700 flex justify-between items-center">
      <span className="inline-block w-[6em] h-[2em] leading-none bg-teal-200 text-teal-700 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center">
          <p>{props.status}</p>
        </span>
        <svg className="h-7 w-7 text-teal-500 hover:fill-current hover:cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
      
    </div>
</div>
  )
} 