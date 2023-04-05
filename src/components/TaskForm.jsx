export default function TaskForm() {
  return (
    <form action="/api/form" method="post" className="flex flex-col text-white items-center m-4 border-solid border-2 w-[600px]">
      <h1 className="text-[28px]">New Task</h1>
      <label htmlFor="name">Task Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="start">Description</label>
      <input type="text" id="desc" name="desc" required />

      <label htmlFor="start">Start Date</label>
      <input type="text" id="start" name="start" required />

      <label htmlFor="end">End Date</label>
      <input type="text" id="end" name="end" required />

      <label htmlFor="category">Category</label>
      <input type="text" id="category" name="category" required />

      <label htmlFor="numHelpers">Helpers Needed</label>
      <input type="text" id="numHelpers" name="numHelpers" required />

      <label htmlFor="image">Upload Photo</label>
      <input type="text" id="image" name="image" required />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" required />

      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" required />

      <label htmlFor="postcode">Postal Code</label>
      <input type="text" id="postcode" name="postcode" required />

      <button type="submit" className="p-4 bg-purple-600 m-2">Submit</button>
    </form>
  )
}