export default function Task(props) {
  return (
  <div className="flex justify-center">
  <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
    <img src="https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Lawn Mowing" className="pb-4"></img>
    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {props.name}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    {props.description}
    </p>
    <div className="flex justify-between">
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">More Info</p>
      <svg className="h-8 w-8 text-teal-500 hover:fill-current hover:cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    </div>
  </div>
</div>
  )
} 