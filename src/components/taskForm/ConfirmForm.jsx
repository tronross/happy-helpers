import DetailedTask from "../DetailedTask"

export default function ConfirmForm({formData, user}) {
  const address = {
    address: formData.address,
    city: formData.city,
    postcode: formData.postcode
  }
console.log(formData)
  const startDate = formData.startDate
  const startDateString = (new Date(startDate).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})); 
  const endDate = formData.endDate
  const endDateString = (new Date(endDate).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})); 

console.log(formData)
  return (
    <div className="flex flex-col w-1/2 items-center self-center">
    <div className="text-violet-800">Is everything correct?</div>
    <DetailedTask 
      status="OPEN"
      selectedUser={user}
      sendOffer={null}
      offerTaskIds={[]}
      task={formData}
      userAddress={address}
      type="fake"
      startDate={startDateString}
      endDate={endDateString}
    />
    </div>
  )
}
