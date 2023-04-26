export default function Task(props) {
  
  const taskStyle = props.row === true ? "border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 w-[15em] min-h-[24em] flex flex-col justify-between hover:cursor-pointer max-w-[290px] relative font-fredoka" : "border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 min-h-[24em] flex flex-col justify-between hover:cursor-pointer max-w-[290px] relative font-fredoka";

  
  const getStyle = (status) => {
    switch(status) {
      case 'OPEN':  return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-teal-200 text-teal-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
      case 'PENDING': return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-violet-200 text-violet-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
      case 'COMPLETE': return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-amber-200 text-amber-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
    }
  }
  console.log
  const statusColor = getStyle(props.status)
  
  return (
  <div className={taskStyle} onClick={() => props.onClick(props.id)}>
    {props.starred && props.status === 'COMPLETE' && (
        <svg
          className="absolute top-[-15px] left-[220px] h-8 w-8 stroke-yellow-300 hover:fill-yellow-300 hover:cursor-pointer fill-yellow-300"
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
    <div>
    <img src={props.image} alt={props.name} className="mb-2 rounded-t-lg h-48 w-96"></img>
    <section className="px-4">
      <h5 className=" text-xl leading-tight line-clamp-1 mb-1">
      {props.name}
    </h5>
    <section >
    <span className="mb-2 text-sm">
      {props.city}
    </span>
    </section>
    <p className="mb-2 text-sm">
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
      <p className="text-teal-600 text-base pl-1">{props.distance}</p>
      </div>
      
    </div>
</div>
  )
} 