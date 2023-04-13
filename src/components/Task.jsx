export default function Task(props) {
  
  const taskStyle = props.row === true ? "border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 w-[15em] h-[23em] flex flex-col justify-between hover:cursor-pointer max-w-[290px]" : "border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 h-[25em] flex flex-col justify-between hover:cursor-pointer max-w-[290px]";

  
  const getStyle = (status) => {
    switch(status) {
      case 'OPEN':  return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-teal-200 text-teal-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
      case 'PENDING': return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-violet-200 text-violet-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
      case 'COMPLETE': return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-amber-200 text-amber-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
    }
  }
  
  const statusColor = getStyle(props.status)
  
  return (
  <div className={taskStyle} onClick={() => props.onClick(props.id)}>
    <div>
    <img src={props.image} alt={props.name} className="mb-2 rounded-t-lg"></img>
    <section className="px-4">
      <h5 className=" text-xl leading-tight line-clamp-1">
      {props.name}
    </h5>
    <p className="mb-2 text-base text-teal-700">
    {props.city}
    </p>
    <p className="mb-2 text-base text-teal-700">
    {`Distance: ${props.distance}km`}
    </p>
    <p className=" text-base line-clamp-2">
    {props.description}
    </p>
    </section>
    </div>
    <div className="p-4  text-sm text-gray-700 flex justify-between items-center">
      <div className={statusColor}>
          <p className="p-3">{props.status}</p>
      </div>
      <svg className="h-7 w-7 text-teal-500 hover:fill-current hover:cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
      
    </div>
</div>
  )
} 