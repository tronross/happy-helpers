export default function Sidebar(props) {
  return (
    <>
    <div className="w-[1500px] h-screen sticky top-0">Filters
    <form action="/api/tasks" method="get">
        <input type="text" placeholder="Location"/>
        <select>
          <option value="all-tasks">All Tasks</option>
          <option value="errands">Errands</option>
          <option value="house-work">House Work</option>
          <option value="personal-care">Personal Care</option>
          <option value="tech-support">Tech Support</option>
          <option value="charity-causes">Charity & Causes</option>
        </select>
        <input type="date" placeholder="Date"/>
        <input type="submit" value="Submit" />
    </form>
    
    </div>
    </>
  )
}