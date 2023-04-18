export default function Task(props) {
  
  const taskStyle = props.row === true ? "border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 w-[15em] h-[23em] flex flex-col justify-between hover:cursor-pointer max-w-[290px]" : "border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 h-[24em] flex flex-col justify-between hover:cursor-pointer max-w-[290px]";

  
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
      <h5 className=" text-xl leading-tight line-clamp-1 mb-1">
      {props.name}
    </h5>
    <section >
    <span className="mb-2 text-sm text-teal-700">
    {props.city}
    </span>
    </section>
    <p className="mb-2 text-sm text-teal-700">
    {props.startDate}
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
      <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0d9488" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      <p className="text-teal-600 pl-1">{props.distance}</p>
      </div>
      
    </div>
</div>
  )
} 