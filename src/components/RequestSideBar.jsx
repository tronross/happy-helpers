export default function RequestSidebar(props) {

  const offers = props.selectedOffers.map((offer, index) => {
    return (
      <div key={index}>
        <p>You have an offer from {offer.user.firstName} {offer.user.LastName}</p>
        <p>Description: {offer.user.description}</p>
        <p>Skills: {offer.user.skills}</p>
        <p>Stars: {offer.user.stars}</p>
      </div>
    );
  });

  return (
    <div className="min-w-400 h-screen sticky top-0 flex-col justify-between m-4 text-lg text-teal-700">
      <h2 className="mb-2 text-base text-teal-700">Filter Requests:</h2>

      <label htmlFor="status_select" className="sr-only">Filter By Status</label>
      <select
        id="status_select"
        className="block py-2.5 px-0 w-full text-sm text-teal-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        name="selectedStatus"
        value={props.status}
        onChange={props.handleStatusChange}
      >
        {props.statusFilter}
      </select>

      <label htmlFor="category_select" className="sr-only">Filter By Category</label>
      <select
        id="category_select"
        className="block py-2.5 px-0 w-full text-sm text-teal-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        name="selectedCategory"
        value={props.category}
        onChange={props.handleCategoryChange}
      >
        {props.categoryFilter}
      </select>


      {/* <span>By Category:</span>
      <select
        name="selectedCategory"
        value={props.category}
        onChange={props.handleCategoryChange}
      >
        {props.categoryFilter}
      </select> */}
      <button
        className="inline-block w-[8em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
        onClick={props.resetFilters}
      >
        Reset
      </button>

      <section>
        <h2 className="mb-2 text-base text-teal-700">Offers of Help:</h2>
        {props.selectedOffers.length === 0 && <p>No volunteers yet.</p>}
        {props.selectedOffers.length > 0 && offers}
      </section>

    </div>
  );
}