export default function Sidebar(props) {
  const dropdownSelect = (e) => {
    const select = e.target.value
    console.log(select)
    console.log(`>>>>>>>>>>>>>>>${props.filters.category}`)
    props.setCategory(select === 'All Categories' ? '' : select)
    props.filters.category = select;
    console.log(`>>>>>>>>>>>>>>>${props.filters.category}`)
    props.filterTasks()

    // props.setSelectedSidebar(select)
  }

  return (
    <>
    <div className="h-screen sticky top-0 ">
      <section className="flex space-x-4" >
        <h4 className= "m-4 text-lg text-teal-600 font-bold mb-2">Sort By:</h4>
        <button type="button" className="inline-flex justify-center items-center gap-2 bg-teal-600 px-4 py-1 rounded text-white" onClick={props.sortDistance}>Distance</button>
        <button className="inline-flex justify-center items-center gap-2 bg-teal-600 px-4 py-1 rounded text-white" onClick={props.sortTime}>Date</button>
      </section>
        <h4 className= "m-4 text-lg text-teal-600 font-bold mb-2">Filter By:</h4>
      <section className="max-w-xs flex flex-col rounded-md shadow-sm">
        {props.sidebarOptions.map((item, idx) => {
          return <button className="w-full bg-teal-600 px-4 py-1 rounded text-white inline-flex justify-center shadow-sm" key={idx} value={item} onClick={dropdownSelect}>{item}</button>
        })}
        <button className="w-full bg-teal-600 px-4 py-1 rounded text-white inline-flex justify-center shadow-sm" key={15} value={'All Categories'} onClick={dropdownSelect}>Reset Filter</button>
        </section>
    
      {/* <input type="date" placeholder="Date"/> */}
      {/* <input type="submit" value="Submit" /> */}
 
    
    </div>
    </>
  )
}