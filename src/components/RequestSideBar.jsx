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

  return (
    <aside className="rounded-3xl ml-6 p-4 shadow-xl bg-violet-200 w-[320px] text-violet-900 border-violet-300 border-2 sticky top-[120px] pt-4">
      <div className='flex justify-between items-center'>
        <h2 className=" text-base font-bold ml-2">FILTER REQUESTS:</h2>
        <p className='text-sm uppercase text-violet-400 font-bold mr-3 hover:cursor-pointer hover:text-violet-500' onClick={props.resetFilters}>RESET</p>
      </div>

      <label htmlFor="status_select" className="sr-only">Filter By Status</label>
      <select
        id="status_select"
        className="block py-2 px-4 w-full bg-violet-100 border-2 rounded-full border-violet-300 appearance-none focus:outline-none peer hover:cursor-pointer my-4"
        name="selectedStatus"
        value={props.status}
        onChange={props.handleStatusChange}
      >
        {props.statusFilter}
      </select>

      <label htmlFor="category_select" className="sr-only">Filter By Category</label>
      <select
        id="category_select"
        className="block py-2 px-4 w-full bg-violet-100 border-2 rounded-full border-violet-300 appearance-none focus:outline-none peer hover:cursor-pointer my-2"
        name="selectedCategory"
        value={props.category}
        onChange={props.handleCategoryChange}
      >
        {props.categoryFilter}
      </select>
      <div className='flex justify-center'>
        <div className='border-b-2 border-violet-300 w-2/3 py-2'></div>
      </div>
      <section>
        {!props.selectedRequestId && <h2 className="mb-2 p-2 w-full text-violet-800 text-sm pt-5">Click a request to see the offer status.</h2>}
        {props.selectedRequestId && props.selectedOffers.length === 0 && <p className="text-sm p-2 pb-2 pt-5">Sorry, there are no volunteers for this request yet.</p>}
        {props.selectedRequestId && props.selectedOffers.length > 0 && (
          <OfferList
            selectedOffers={props.selectedOffers}
            handleAcceptOffer={props.handleAcceptOffer}
            selectedRequestId={props.selectedRequestId}
            selectedRequestStatus={props.selectedRequestStatus}
            handleRequestComplete={props.handleRequestComplete}
            selectedOfferUser={props.selectedOfferUser}
            setSelectedOfferUser={props.setSelectedOfferUser}
          />
        )}
      </section>
    </aside>
  );
}