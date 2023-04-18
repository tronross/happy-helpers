import { useEffect, useState } from 'react';

export default function Sidebar(props) {
  // Button state
  const [clicked, setClicked] = useState({
    distance: 50,
    category: 'All Categories',
    sort: 'Date'
  });



  // Click handlers
  const dropdownSelect = (e) => {
    const select = e.target.value;
    props.setCategory(select === 'All Categories' ? '' : select)
    setClicked(prev => ({ ...prev, category: select }));
    props.setFilters(prev => ({ ...prev, category: select }));
  }

  const filterCity = (e) => {
    const cityFilter = e.target.value;
    console.log(cityFilter)
    setClicked({ distance: 'all' })
    props.setFilters(prev => ({
      ...prev, city: cityFilter,
      distance: 'all'
    }));
  }

  const clearCityFilter = () => {
    const cityFilter = document.getElementById('cityFilter');
    cityFilter.value = '';
    props.setFilters(prev => ({ ...prev, city: '' }));
    setClicked({ distance: 50 })
  }

  const closerThan = (e) => {
    const distance = e.target.value;
    setClicked(prev => ({ ...prev, distance: distance }));
    props.setFilters(prev => ({ ...prev, distance: distance }));
  }

  const selectDate = (e) => {
    const date = e.target.value
    console.log(date)
    props.setFilters(prev => ({ ...prev, date: date }));
  }

  const sortSelect = (e) => {
    const sort = e.target.value
    setClicked(prev => ({ ...prev, sort: sort }));
    props.setFilters(prev => ({ ...prev, sort: sort }));
  }

  const resetFilters = () => {
    props.setFilters({
      distance: 50,
      category: 'All Categories',
      sort: 'Date',
      date: 'All',
      city: ''
    });

    setClicked({
      distance: 50,
      category: 'All Categories',
      sort: 'Date',
      date: 'All'
    });
  }

  // Call filterTasks on change of filters state
  useEffect(() => {
    console.log(new Date('2023-04-19T10:00:00.000Z').toISOString().substring(0, 10))
    props.filterTasks()
  }, [props.filters])


  return (
    <>
      <div className="h-screen sticky top-0 w-[24em]">
        <section className="flex items-baseline space-x-4" >
          <h4 className="m-4 text-lg text-teal-700 font-bold mb-2">Sort By:</h4>
          {clicked.sort === 'Date' ?
            <button className="inline-flex justify-center items-center gap-2 bg-teal-800 h-10 px-4 py-1 rounded text-white" value={'Date'} onClick={sortSelect}>Date</button>
            :
            <button className="inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 h-10 px-4 py-1 rounded text-white" value={'Date'} onClick={sortSelect}>Date</button>
          }
          {clicked.sort === 'Distance' ?
            <button type="button" className="inline-flex justify-center items-center gap-2 bg-teal-800 h-10 px-4 py-1 rounded text-white" value={'Distance'} onClick={sortSelect}>Distance</button>
            :
            <button type="button" className="inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 h-10 px-4 py-1 rounded text-white" value={'Distance'} onClick={sortSelect}>Distance</button>
          }
        </section>
        <h4 className="m-4 text-lg text-teal-700 font-bold mb-2">Filter By:</h4>
        <section className="max-w-xs flex flex-col rounded-md shadow-sm space-y-0.5">
          {props.sidebarOptions.map((item, idx) => {
            if (item === clicked.category) {
              return <button className="w-full bg-teal-800 px-4 py-1 rounded text-white inline-flex justify-center shadow-sm" key={idx} value={item} onClick={dropdownSelect}>{item}</button>
            } else {
              return <button className="w-full bg-teal-600 hover:bg-teal-500 active:bg-teal-700 px-4 py-1 rounded text-white inline-flex justify-center shadow-sm" key={idx} value={item} onClick={dropdownSelect}>{item}</button>
            }
          })}
        </section>
        <h5 className="m-4 text-lg text-teal-700 font-bold mb-2">City:</h5>
        <section className="flex flex-row space-x-1.5 items-baseline">
          <input className="h-8 w-400 block w-full text-m text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 " name="cityFilter" type="text" onChange={filterCity} id="cityFilter" ></input>
          <button className="inline-flex justify-center items-center gap-2 bg-teal-600 h-8 px-4 py-1 rounded text-white" onClick={clearCityFilter}>reset</button>
        </section>

        <h5 className="m-4 text-lg text-teal-700 font-bold mb-2">Distance (km):</h5>
        <section className="inline-flex rounded-md shadow-sm space-y-0.5">
          {props.distances.map((distance, idx) => {
            // Loose equality operator used to coerce type
            if (parseInt(distance) == clicked.distance) {
              return <button type="button" className="w-full bg-teal-800 px-4 py-1 rounded text-white inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-m first:ml-0 last:rounded-r-m border" key={idx} value={distance} onClick={closerThan} >{distance}</button>
            } else if (distance == 'all' && clicked.distance == 'all') {
              return <button type="button" className="w-full bg-teal-800 px-4 py-1 rounded text-white inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-m first:ml-0 last:rounded-r-m border" key={idx} value={distance} onClick={closerThan} >{distance}</button>
            } else {
              return <button type="button" className="w-full bg-teal-600 hover:bg-teal-500 active:bg-teal-700 px-4 py-1 rounded text-white inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-m first:ml-0 last:rounded-r-m border" key={idx} value={distance} onClick={closerThan} >{distance}</button>
            }
          })}
        </section>
        <section className="max-w-xs flex flex-col rounded-md shadow-sm space-y-0.5">
          <button className="w-full bg-teal-600 hover:bg-teal-500 active:bg-teal-800 px-4 py-1 rounded text-white inline-flex justify-center shadow-sm" key={15} value={'All Categories'} onClick={resetFilters}>Reset Filters</button>
        </section>


        {/* <form>
        <input type="date" name="selectedDate" onChange={selectDate} />
          <noscript>
            <input type="submit" value="Submit" />
          </noscript>
      </form> */}
        {/* <input type="date" placeholder="Date"/> */}
        {/* <input type="submit" value="Submit" /> */}


      </div>
    </>
  )
}