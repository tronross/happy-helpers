export default function Sidebar(props) {
  const dropdownSelect = (e) => {
    const select = e.target.value
    console.log(select)
    props.setSelectedSidebar(select)
  }
  return (
    <>
    <div className="w-[1500px] h-screen sticky top-0">Filters
    <form action="/api/tasks" method="get">
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