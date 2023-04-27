import { useEffect, useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";

export default function Sidebar(props) {
  // Calendar (date) filter state
  const [dateFilter, setDateFilter] = useState(null);

  // Button state
  const [clicked, setClicked] = useState({
    distance: 25,
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

  // const clearCityFilter = () => {
  //   const cityFilter = document.getElementById('cityFilter');
  //   cityFilter.value = '';
  //   props.setFilters(prev => ({ ...prev, city: '' }));
  //   setClicked({ distance: 50 })
  // }

  const [currentDistance, setCurrentDistance] = useState(4)

  const realDistance = (distance) => {
    switch (distance) {
      case "0": return 1;
      case "1": return 2;
      case "2": return 5;
      case "3": return 10;
      case "4": return 25;
      case "5": return "all";
    }
  }

  const closerThan = (e) => {
    const distance = e.target.value;
    setCurrentDistance(distance);
    const newDistance = realDistance(distance);
    setClicked(prev => ({ ...prev, distance: newDistance }));
    props.setFilters(prev => ({ ...prev, distance: newDistance }));
  }

  const handleDateFilter = (dateFilter) => {
    console.log("dateFilter:", dateFilter.startDate);
    setDateFilter(dateFilter);
    props.setFilters(prev => ({ ...prev, date: dateFilter.startDate }));
  }

  const sortSelect = (e) => {
    const sort = e.target.value
    setClicked(prev => ({ ...prev, sort: sort }));
    props.setFilters(prev => ({ ...prev, sort: sort }));
  }

  const resetFilters = () => {
    props.setFilters({
      distance: 25,
      category: 'All Categories',
      sort: 'Date',
      dateFilter: null,
      city: ''
    });

    setClicked({
      distance: 25,
      category: 'All Categories',
      sort: 'Date'
    });

    setCurrentDistance(4);

    setTimeout(() => { setDateFilter({ startDate: null, endDate: null }) }, 50)
  }

  // Call filterTasks on change of filters state
  useEffect(() => { props.filterTasks() }, [props.filters])



  return (
    <aside className="rounded-3xl ml-6 p-4 shadow-xl bg-violet-200 w-[320px] text-violet-900 border-violet-300 border-2 sticky top-[100px] pt-4 mt-5 font-fredoka" >
      <div className="px-2">
        <div className='flex justify-between'>
          <h1 className='uppercase font-semibold text-base'>Sort By:</h1>
          <p className='text-sm uppercase text-violet-400 font-semibold hover:cursor-pointer hover:text-violet-500' onClick={resetFilters}>RESET</p>
        </div>
        {/* <section className="flex items-baseline space-x-4" > */}
        <section className="max-w-xs flex flex-col rounded-md space-y-0.5 mt-3">
          <div className='flex justify-center'>
            {clicked.sort === 'Date' ?
              <button className="w-2/5 bg-violet-300 px-4 py-1 rounded-full text-white border border-violet-100 border-2 inline-flex justify-center mr-2" value={'Date'} onClick={sortSelect}>Date</button>
              :
              <button className="w-2/5 bg-violet-100 hover:bg-violet-300  hover:text-white hover:border-violet-100 active:bg-violet-400 active:text-white px-4 py-1 border-2 border-violet-300 rounded-full text-violet-900 inline-flex justify-center mr-2" value={'Date'} onClick={sortSelect}>Date</button>
            }
            {clicked.sort === 'Distance' ?
              <button type="button" className="w-2/5 bg-violet-300 px-4 py-1 rounded-full text-white border border-violet-100 border-2 inline-flex justify-center ml-2" value={'Distance'} onClick={sortSelect}>Distance</button>
              :
              <button type="button" className="w-2/5 bg-violet-100 hover:bg-violet-300  hover:text-white hover:border-violet-100 active:bg-violet-400 active:text-white px-4 py-1 border-2 border-violet-300 rounded-full text-violet-900 inline-flex justify-center ml-2" value={'Distance'} onClick={sortSelect}>Distance</button>
            }
          </div>
        </section>
        <h1 className='uppercase font-semibold text-base mt-4'>Filter By:</h1>
        <select className="block py-2 px-4 w-full bg-violet-100 border-2 rounded-full border-violet-300 appearance-none focus:outline-violet-400 hover:cursor-pointer my-4" id="category" name="category" value={clicked.category} onChange={e => dropdownSelect(e)}>
          {props.sidebarOptions.map((item, idx) => {
            return <option key={idx}>{item}</option>
          })}
        </select>
        <section className='max-w-xs' >
          <Datepicker
            // displayFormat={''}
            primaryColor={"violet"}
            asSingle={true}
            value={dateFilter}
            onChange={handleDateFilter}
            useRange={false}
            inputClassName="rounded-full border-2 border-violet-300 w-full py-2 px-3 bg-violet-100 text-violet-900 focus:outline-violet-400"
          />
        </section>
        <section className="max-w-xs flex flex-row space-x-1.5 items-baseline">
          <input className="h-11 w-400 block w-full text-m placeholder-violet-900 rounded-full my-4 pl-4 bg-violet-100 border-2 border-violet-300 focus:outline-violet-400" name="cityFilter" type="text" placeholder="Search by City..." onChange={(e) => filterCity(e)} id="cityFilter" ></input>
        </section>

        <h5 className=" text-sm text-violet-900 uppercase font-semibold mb-1">Distance (km):</h5>
        <input id="minmax-range" type="range" min="0" max="5" value={currentDistance} className="w-full h-2 bg-violet-50 border border-violet-300 border-2 accent-violet-400  rounded-lg appearance-none cursor-pointer" onChange={(e) => closerThan(e)} />
      </div>
      <div className="flex text-xs font-semibold text-violet-900 pl-2 mb-1">
        <p className='ml-[6px]'>1</p>
        <p className='ml-[45px]'>2</p>
        <p className='ml-[43px]'>5</p>
        <p className='ml-[41px]'>10</p>
        <p className='ml-[38px]'>25</p>
        <p className='ml-[33px]'>ALL</p>
      </div>
    </aside>
  )
}