export default function PageHeader(props) {
  return (
    <div className="flex justify-between m-4 ml-10 text-lg text-teal-600 font-semibold font-fredoka mb-2">
      <section>
        <h1 className="text-[1.75em]">Discover {props.category === "All Categories" ? '' : props.category} Volunteer Opportunities in {props.city}</h1>
      </section>
      <section className="flex mr-8">
        <p className="mx-3 hover:cursor-pointer hover:text-teal-500 active:text-teal-700" onClick={() => props.setView("List")}>LIST</p>
        <p>|</p>
        <p className="ml-3 hover:cursor-pointer hover:text-teal-500 active:text-teal-700" onClick={() => props.setView("Map")}>MAP</p>
      </section>
    </div>

  )
}