import React, { useEffect, useState } from "react"
import { useStateValue } from "../../StateProvider"
import "./UserOptions.css"

const UserOptions = () => {
  let [options, setOptions] = useState([])
  const [{ selectedColour }, dispatch] = useStateValue()
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
    dispatch({
      type: "SET_SELECTED_COLOUR",
      selectedColour: e.target.className,
    })
  }
  return (
    <div>
      <div onClick={handleUserSelect} className="user__options">
        {options.map((obj, idx) => (
          <div
            key={"id" + idx }
            className={`${
              selectedColour === `option ${obj[idx]}`
                ? `option ${obj[idx ]} selected`
                : `option ${obj[idx ]}`
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default UserOptions
