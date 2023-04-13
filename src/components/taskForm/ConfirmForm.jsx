import DetailedTask from "../DetailedTask"

export default function ConfirmForm({formData, user}) {
  const address = {
    address: formData.address,
    city: formData.city,
    postcode: formData.postcode
  }
  console.log()
  return (
    <div className="flex flex-col w-1/2 items-center self-center">
    <div className="text-teal-600">Is everything correct?</div>
    <DetailedTask 
      status="OPEN"
      selectedUser={user}
      sendOffer={null}
      offerTaskIds={[]}
      task={formData}
      userAddress={address}
    />
    </div>
  )
}
