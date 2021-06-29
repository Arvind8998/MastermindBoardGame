import React, { useEffect, useState } from "react"
import { useStateValue } from "../../StateProvider"
import "./UserOptions.css"

const UserOptions = () => {
  let [options, setOptions] = useState([])
  const [{ selectedColour }, dispatch] = useStateValue()
  useEffect(() => {
    let colourOptions = [
      { 0: "yellowColor" },
      { 1: "carrotColor" },
      { 2: "greenColor" },
      { 3: "tealColor" },
      { 4: "blueColor" },
      { 5: "violetColor" },
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
