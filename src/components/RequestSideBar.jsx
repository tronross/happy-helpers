// @refresh reset
import OfferList from '../components/OfferList';

/**
 * Logic for displaying offers:
 * 1. If no task is selected (props.selectedRequestId = UNDEFINED),
 *    - show 'Click a task to see the offer status.'
 *
 * 2. If selected request is OPEN:
 *    - get offers
 *    - If NO offers, show 'Sorry, there are no volunteers for this request yet.'
 *    - If ANY offers, map offers, show ACCEPT OFFER button
 *    - Link to volunteer profile
 *    - Clicking ACCEPT OFFER button will change selected request status & offer status to PENDING
 *
 * 3. If selected request is PENDING:
 *    - show accepted offer
 *    - when user clicks on COMPLETED button, show option to give star
 *
 * 4. If selected request is CLOSED:
 *    - show 'this request was completed by ${volunteer name}'
 */

export default function RequestSidebar(props) {

  const offerMessage = props.selectedRequestId ? 'OFFERS OF HELP:' : 'Click a task to see the offer status.';

  return (
    <div className="min-w-400 h-screen flex-col justify-between m-4 text-lg text-teal-700">
      <h2 className="mb-2 text-base text-teal-700">FILTER REQUESTS:</h2>

      <label htmlFor="status_select" className="sr-only">Filter By Status</label>
      <select
        id="status_select"
        className="block py-2.5 px-0 w-full text-sm text-teal-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        name="selectedStatus"
        value={props.status}
        onChange={props.handleStatusChange}
      >
        {props.statusFilter}
      </select>

      <label htmlFor="category_select" className="sr-only">Filter By Category</label>
      <select
        id="category_select"
        className="block py-2.5 px-0 w-full text-sm text-teal-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        name="selectedCategory"
        value={props.category}
        onChange={props.handleCategoryChange}
      >
        {props.categoryFilter}
      </select>

      <button
        className="mt-4 inline-block w-[10em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
        onClick={props.resetFilters}
      >
        RESET FILTERS
      </button>

      <section>
        <h2 className="mb-2 mt-6 w-full text-base text-teal-700">{offerMessage}</h2>
        {props.selectedRequestId && props.selectedOffers.length === 0 && <p className="text-sm">Sorry, there are no volunteers for this request yet.</p>}
        {props.selectedOffers.length > 0 && (
          <OfferList
            selectedOffers={props.selectedOffers}
            handleAcceptOffer={props.handleAcceptOffer}
            selectedRequestId={props.selectedRequestId}
            selectedRequestStatus={props.selectedRequestStatus}
            handleRequestComplete={props.handleRequestComplete}
          />
        )}
      </section>

      <div>
        <h2 className="mb-2 mt-6 w-full text-base text-teal-700">Dev info</h2>
        <p className="text-sm">selectedRequestId: {props.selectedRequestId}</p>
        <p className="text-sm">selectedRequestStatus: {props.selectedRequestStatus}</p>
        <p className="text-sm">offerStatus: {props.offerStatus}</p>
      </div>

    </div>
  );
}