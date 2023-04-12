//////////////////////
// Button Component
//////////////////////

// Stylesheet

// Component

export default function Button(props) {


  return (
    <button className='uppercase font-bold bg-teal-600 px-3 py-1 rounded text-white h-8 text-sm' onClick={props.onClick} >
      {props.buttonName}
    </button>
  )
};
