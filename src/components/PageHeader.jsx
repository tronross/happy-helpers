export default function PageHeader(props) {
  return (
    <div className="flex justify-between m-4 text-lg text-teal-600 font-bold mb-2">
      <section>
        <h1 className="text-[1.75em]">Discover {props.category === "All Categories" ? '' : props.category} Volunteer Opportunities in {props.city}</h1>
      </section>
      <section className="flex">
        <p className="mx-3 hover:cursor-pointer hover:text-teal-500 active:text-teal-700" onClick={() => props.setView("List")}>LIST</p>
        <p>|</p>
        <p className="mx-3 hover:cursor-pointer hover:text-teal-500 active:text-teal-700" onClick={() => props.setView("Map")}>MAP</p>
      </section>
    </div>

  )
}