import React from "react"
import "./Row.css"
import RowAnswer from "../RowAnswer/RowAnswer"
import { useStateValue } from "../../StateProvider"
import { useEffect, useState } from "react"
import CheckIcon from "@material-ui/icons/Check"

const Row = (props) => {
  const { rowNo, rowInfo } = props
  const [selectedCircle, fillCircle] = useState("")
  const [{ selectedColour, rows, aiAnswer, isGameWon }, dispatch] =
    useStateValue()

  let handleClick = (e) => {
    debugger
    if (e.target.parentElement.className === "tickIcon") {
      dispatch({
        type: "VALIDATE_ROW",
        rowNo: rowNo,
      })
    } else if (checkAllFilled(rowInfo)) {
      return
    } else if (e.target.id) {
      dispatch({
        type: "UPDATE_ROWS",
        selectedCircle: rowNo + "_" + e.target.id,
      })
    }
  }

  let checkAllFilled = (rowInfo) => {
    return Object.values(rowInfo).every((el) => el.includes("Color"))
  }

  let rowCreator = () => {
    let rowCircles = []
    for (let key in rowInfo) {
      rowCircles.push(
        <div id={key} key={"id" + key} className={`row ${rowInfo[key]}`}></div>
      )
    }
    return rowCircles
  }

  return (
    <div onClick={handleClick} className="row_container">
      {rowCreator()}
      {checkAllFilled(rowInfo) && (
        <div className="tickIcon">
          <CheckIcon id={"submitIcon"} fontSize="large" fontWeight="bold" />
        </div>
      )}
      <RowAnswer />
     
    </div>
  )
}

export default Row
