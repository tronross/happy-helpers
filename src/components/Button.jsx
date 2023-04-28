export default function Button(props) {

  const logout = props.buttonName === "LOGOUT" ? "bg-teal-600 hover:bg-teal-700 active:bg-teal-800": "";
  const buttonStyle = `${logout} ${props.buttonStyle} uppercase font-semibold px-3 py-1 rounded text-white h-8 text-sm`;

  return (
    <button disabled={props.disabled} className={buttonStyle} onClick={props.onClick} >
      {props.buttonName}
    </button>
  )
};
