export default function Task(props) {
  return (
  <div className="border-1 p-4 shadow-lg m-4 bg-gradient-to-b from-teal-400 to-purple-800 rounded text-teal-400">
    <img src={props.image} alt={props.name} className="mb-2"></img>
    <h5 className="mb-2 text-xl font-medium leading-tight">
      {props.name}
    </h5>
    <p className="mb-4 text-base">
    {props.description}
    </p>
    <div className="flex justify-between">
      <p className="mb-4 text-base">More Info</p>
      <svg className="h-8 w-8 text-teal-500 hover:fill-current hover:cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    </div>
</div>
  )
} 