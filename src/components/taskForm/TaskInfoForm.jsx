
export default function TaskInfo({formData, onChange}) {
  // console.log(formData.name)

  return (
    <form className="px-8 m-8 pb-0 mb-0 my-4 text-teal-600">
       <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name">
             Task Name
           </label>
           <input name="name" className=" appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600" id="name" type="text" placeholder="Carrying Boxes" value={formData.name} onChange={e => onChange(e)}/>
           {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
         </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="category">
              Category
            </label>
          <div className="relative">
            <select className="block appearance-none w-full  border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-600" id="category" name="category" value={formData.category} onChange={e => onChange(e)}>
              <option>Volunteer</option>
              <option>Cleaning</option>
              <option>Errands</option>
              <option>Other</option>
            </select>
          </div>
          </div>
       </div>
       <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full px-3">
           <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="description">
             Description
           </label>
           <textarea className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600 resize-none h-24" id="description" type="textarea" placeholder="Explain your task..." name="desc"  value={formData.desc} onChange={e => onChange(e)}/>
         </div>
       </div>
       <div className="flex flex-wrap -mx-3 mb-2">
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="nbHelpers">
             Helpers Needed
           </label>
           <div className="relative">
             <select className="block appearance-none w-full  border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-600" id="nbHelpers" name="nbHelpers" value={formData.nbHelpers} onChange={e => onChange(e)} >
               <option value ="1">1</option>
               <option value ="2">2</option>
               <option value ="3">3</option>
               <option value ="4">4</option>
               <option value ="5+">5+</option>
             </select>
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
               <svg className="fill-current h-4 w-4" xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
             </div>
           </div>
         </div>
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="image">
             Upload Photo
           </label>
           <input
    className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white  file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded file:text-white file:border-0 file:border-solid file:border-inherit file:bg-teal-600 file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] hover:file:cursor-pointer" type="file" id="image" name="image" value={formData.image} onChange={e => onChange(e)}/>
         </div>
       </div>
       <div>
       </div>
     </form>
    );
}