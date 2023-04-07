//////////////////////
// Button Component
//////////////////////

// Stylesheet

// Component

export default function Button(props) {


  return (
    <button onClick={props.onClick} >
      {props.buttonName}
    </button>
  )
};
