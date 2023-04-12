//////////////////////
// Button Component
//////////////////////

// Stylesheet

// Component

export default function Button(props) {

  const buttonStyle = `${props.buttonStyle} uppercase font-bold px-3 py-1 rounded text-white h-8 text-sm`;



  return (
    <button disabled={props.disabled} className={buttonStyle} onClick={props.onClick} >
      {props.buttonName}
    </button>
  )
};
