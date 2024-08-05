
const Button = ({label, iconURL}) => {
  return (
    <button className=""
    >{label}
    <img src={iconURL} alt="right arrow" className="ml-2 rounded-full"/>
    
    </button>
  )
}

export default Button