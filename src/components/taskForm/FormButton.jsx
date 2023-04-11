export default function FormButton(props) {
  return (
    <button className="bg-teal-600 px-4 py-1 rounded text-white" onClick={() => props.onClick(props.buttonName)}>{props.buttonName} </button>
  )
}