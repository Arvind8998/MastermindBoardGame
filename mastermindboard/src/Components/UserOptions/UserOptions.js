import React, { useEffect, useState } from "react"
import "./UserOptions.css"

const UserOptions = () => {
  let [options, setOptions] = useState([])
  useEffect(() => {
    let colourOptions = [
      { 0: "yellow" },
      { 1: "carrot" },
      { 2: "green" },
      { 3: "teal" },
      { 4: "blue" },
      { 5: "violet" },
    ]
    setOptions(colourOptions)
  }, [])
  return (
    <div>
      <div className="user__options">
        {options.map((obj, idx) => (
          <div key={"id" + idx} className={`option ${obj[idx]}`}></div>
        ))}
      </div>
    </div>
  )
}

export default UserOptions
