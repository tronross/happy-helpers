export default function Sidebar(props) {
  const dropdownSelect = (e) => {
    const select = e.target.value
    console.log(select)
    props.setSelectedSidebar(select)
  }

  return (
    <>
    <div className="h-screen sticky top-0 ">
      <section className="flex space-x-4" >
        <h4 className= "m-4 text-lg text-teal-600 font-bold mb-2">Sort By:</h4>
        <button className="bg-teal-600 px-4 py-1 rounded text-white" onClick={props.sortDistance}>Distance</button>
        <button className="bg-teal-600 px-4 py-1 rounded text-white" onClick={props.sortTime}>Date</button>
      </section>
    <form action="/api/tasks" method="get" className="flex flex-col w-[300px]">
        <input type="text" placeholder="Location"/>
        <select onChange={dropdownSelect}>
          {props.sidebarOptions.map((item, idx) => {
            return <option key={idx} value={item}>{item}</option>
          })}
        </select>
        <input type="date" placeholder="Date"/>
        <input type="submit" value="Submit" />
    </form>
    
    </div>
    </>
  )
}