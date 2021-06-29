import React from "react"
import "./Row.css"
import RowAnswer from "../RowAnswer/RowAnswer"
import { useStateValue } from "../../StateProvider"
import { useEffect, useState } from "react"

const Row = (props) => {
  const { rowNo, rowInfo } = props
  const [selectedCircle, fillCircle] = useState("")
  const [{ selectedColour, rows }, dispatch] = useStateValue()

  let handleClick = (e) => {
    dispatch({
      type: "UPDATE_ROWS",
      selectedCircle: rowNo + "_" + e.target.id,
    })
  }

  let rowCreator = () => {
    let rowCircles = []
    for (let key in rowInfo) {
      rowCircles.push(
        <div
          id={key}
          key={"id" + key}
          className={`row ${rowInfo[key]}`}
        ></div>
      )
    }
    return rowCircles
  }

  return (
    <div onClick={handleClick} className="row_container">
      {rowCreator()}
      <RowAnswer />
    </div>
  )
}

export default Row
