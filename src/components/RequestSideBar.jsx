export default function RequestSidebar(props) {

  const offers = props.selectedOffers.map((offer, index) => {
    return (
      <div key={index}>
        <p className="text-sm font-semibold text-teal-700">You have an offer from {offer.user.firstName} {offer.user.lastName}!</p>
        <p className="text-sm text-teal-700">Description: {offer.user.description}</p>
        <p className="text-sm text-teal-700">Skills: {offer.user.skills}</p>
        <p className="text-sm text-teal-700">Stars: {offer.user.stars}</p>
        <p className="text-sm text-teal-700">(dev) This is offer id: {offer.id}</p>
        <button
          className="mt-2 mb-4 inline-block w-[18em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
          onClick={() => props.handleAcceptOffer(offer.id)}
        >
          Accept offer from {offer.user.firstName}
        </button>
      </div>
    );
  });

  return (
    <div className="min-w-400 h-screen sticky top-0 flex-col justify-between m-4 text-lg text-teal-700">
      <h2 className="mb-2 text-base text-teal-700">FILTER REQUESTS:</h2>

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

      <button
        className="mt-2 inline-block w-[10em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
        onClick={props.resetFilters}
      >
        RESET FILTERS
      </button>

      <section>
        <h2 className="mb-2 mt-6 text-base text-teal-700">OFFERS OF HELP:</h2>
        {props.selectedOffers.length === 0 && <p className="text-sm">Sorry, there are no volunteers for this request yet.</p>}
        {props.selectedOffers.length > 0 && offers}
      </section>

    </div>
  );
}