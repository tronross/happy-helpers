
export default function TaskInfo({formData, onChange}) {
  // console.log(formData.name)

  return (
    <form className="px-8 m-8 pb-0 mb-0 my-4 text-violet-800 font-fredoka">
       <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="name">
             Task Name
           </label>
           <input name="name" className=" appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-violet-400" id="name" type="text" placeholder="Feed Turtle" value={formData.name} onChange={e => onChange(e)}/>
           {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
         </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="category">
              Category
            </label>
          <div className="relative">
            <select className="block appearance-none w-full  border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-violet-400" id="category" name="category" value={formData.category} onChange={e => onChange(e)}>
              <option>Animal Care</option>
              <option>Charity & Causes</option>
              <option>Cooking</option>
              <option>DIY</option>
              <option>Driving</option>
              <option>Errands</option>
              <option>Giving</option>
              <option>Heavy Lifting</option>
              <option>Housework</option>
              <option>Personal Care</option>
              <option>Social</option>
              <option>Tech Support</option>
              <option>Yard Work</option>
              <option>Other</option>
            </select>
          </div>
          </div>
       </div>
       <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full px-3">
           <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="description">
             Description
           </label>
           <textarea className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-violet-400 resize-none h-24" id="description" type="textarea" placeholder="Explain your task..." name="desc"  value={formData.desc} onChange={e => onChange(e)}/>
         </div>
       </div>
       <div className="flex flex-wrap mb-2">
         
           <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="image">
             Photo URL
           </label>
           <input
    className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white  file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded file:text-white file:border-0 file:border-solid file:border-inherit file:bg-teal-600 file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] hover:file:cursor-pointer focus:border-violet-400" type="text" id="image" name="image" value={formData.image} onChange={e => onChange(e)}/>
       
       </div>
       <div>
       </div>
     </form>
    );
}