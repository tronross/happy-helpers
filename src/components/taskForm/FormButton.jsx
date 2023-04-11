export default function FormButton(props) {
  return (
    <button className="bg-green-500 px-4 py-1 rounded-md" onClick={() => props.onClick(props.buttonName)}>{props.buttonName} </button>
  )
}