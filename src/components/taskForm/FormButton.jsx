export default function FormButton(props) {
  return (
    <button className="bg-violet-500 px-4 py-1 rounded text-white hover:bg-violet-700 active:bg-violet-900" onClick={() => props.onClick(props.buttonName)}>{props.buttonName} </button>
  )
}