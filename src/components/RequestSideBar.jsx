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
 *    - Clicking ACCEPT OFFER button will:
 *        - change selected request status to PENDING in database
 *        - change accepted offer status to ACCEPTED in database
 *        - change all non-accepted offers to have status DENIED in database
 *        - send WON message to winning volunteer
 *        - send LOSE message to denied volunteers
 *
 * 3. If selected request is PENDING:
 *    - show accepted offer
 *    - when user clicks on COMPLETED button, show option to give star
 *    - send message to volunteer, mention if star was received
 *
 * 4. If selected request is CLOSED:
 *    - show 'this request was completed by ${volunteer name}'
 */

export default function RequestSideBar(props) {

  const offerMessage = props.selectedRequestId ? 'OFFERS OF HELP:' : 'Click a request to see the offer status.';

  return (
    <div className="min-w-400 w-[24em] flex-col justify-between p-4 text-sm text-white bg-teal-600 rounded">
      <h2 className="mb-2 text-base font-bold">FILTER REQUESTS:</h2>

      <label htmlFor="status_select" className="sr-only">Filter By Status</label>
      <select
        id="status_select"
        className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        name="selectedStatus"
        value={props.status}
        onChange={props.handleStatusChange}
      >
        {props.statusFilter}
      </select>

      <label htmlFor="category_select" className="sr-only">Filter By Category</label>
      <select
        id="category_select"
        className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        name="selectedCategory"
        value={props.category}
        onChange={props.handleCategoryChange}
      >
        {props.categoryFilter}
      </select>

      <button
        className="mt-4 inline-block w-[10em] h-[3em] leading-none bg-violet-600 hover:bg-white text-white hover:text-violet-600 rounded font-semibold uppercase tracking-wide text-xs text-center items-center"
        onClick={props.resetFilters}
      >
        RESET FILTERS
      </button>

      <section>
        <h2 className="mb-2 mt-6 w-full text-white text-base font-bold uppercase">{offerMessage}</h2>
        {props.selectedRequestId && props.selectedOffers.length === 0 && <p className="text-sm">Sorry, there are no volunteers for this request yet.</p>}
        {props.selectedRequestId && props.selectedOffers.length > 0 && (
          <OfferList
            selectedOffers={props.selectedOffers}
            handleAcceptOffer={props.handleAcceptOffer}
            selectedRequestId={props.selectedRequestId}
            selectedRequestStatus={props.selectedRequestStatus}
            handleRequestComplete={props.handleRequestComplete}
          />
        )}
      </section>
    </div>
  );
}