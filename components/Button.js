import { useState } from "react"

const Button = (props) => {
  const [select, setSelect] = useState(false)

  const handle = () => {
    // alert("hello")
    setSelect(!select)
  }

  return (
    <>
      <div onClick={handle} className={`${select ? "bg-blue-500 border-blue-500" : ""} rounded-full whitespace-nowrap border-2 border-black uppercase px-5 py-2 inline-block focus:bg-blue-400 `}>
        <button>{props.name}</button>
      </div>
    </>
  )
}

export default Button