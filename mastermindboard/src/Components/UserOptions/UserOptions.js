import React, { useEffect, useState } from "react"
import "./UserOptions.css"

const UserOptions = () => {
  let [options, setOptions] = useState([])
  let [selectedColour, setSelectedColor] = useState("")
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

  let handleUserSelect = (e) => {
    setSelectedColor(e.target.className)

  }
  return (
    <div>
      <div className="user__options">
        {options.map((obj, idx) => (
          <div
            onClick={handleUserSelect}
            key={"id" + idx}
            className={`${
              selectedColour === `option ${obj[idx]}`
                ? `option ${obj[idx]} selected`
                : `option ${obj[idx]}`
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default UserOptions
