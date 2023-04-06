export default function Sidebar(props) {
  const dropdownSelect = (e) => {
    const select = e.target.value
    console.log(select)
    props.setSelectedSidebar(select)
  }
  return (
    <>
    <div className="bg-teal-600 w-[1200px] h-screen sticky top-0">Filters
    <form action="/api/tasks" method="get">
        <input type="text" placeholder="Location"/>
        <select onChange={dropdownSelect}>

          {/* <option value="all-tasks">All Tasks</option>
          <option value="errands">Errands</option>
          <option value="house-work">House Work</option>
          <option value="personal-care">Personal Care</option>
          <option value="tech-support">Tech Support</option>
          <option value="charity-causes">Charity & Causes</option> */}
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