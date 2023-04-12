import Task from "../Task"

export default function ConfirmForm({formData}) {
  console.log(formData)
  return (
    <div className="flex flex-col w-1/2 items-center self-center">
    <div className="text-teal-600">Is everything correct?</div>
    <Task 
      key={formData.id}
      name={formData.name}
      description={formData.desc}
      category={formData.category}
      // user={formData.userId}
      image="https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      status="OPEN"
      city={formData.city}
    
    />
    </div>
  )
}
