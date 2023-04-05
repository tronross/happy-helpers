export default function PageHeader() {
  return (
    <div className="flex justify-between m-4 text-lg">
      <section>
      <h1 className="text-[1.5em]">Discover Tasks in Rockland, ON</h1>
      </section>
      <section className="flex">
      <p className="mx-3">LIST</p>
      <p>|</p>
      <p className="mx-3">MAP</p>
      <label for="sortTasks" className="ml-5 mr-2">Sort By:</label>
      <select id="sortTasks">
      <option value="date">All Tasks</option>
        <option value="date">Date</option>
        <option value="location">Location</option>
      </select>
      </section>
    </div>

  )
}