import React from "react"
import "./RowAnswer.css"
import ClearIcon from '@material-ui/icons/Clear';


const RowAnswer = (props) => {
  const { rowInfo } = props

  
  let checkAllFilled = (rowInfo) => {
    return Object.values(rowInfo).every((el) => el.color.includes("Color"))
  }
debugger
  return (
    <div className="rowAnswer__container">
      {Object.values(rowInfo).map((el, idx) => (
        <div key={"id" + idx} className={`rowAnswer ${el.isCorrectMove ? 'correct': ""}`}>
          {!el.isCorrectMove && el.isSubmitted && <div className="incorrectMove">x</div>}
        </div>
      ))}
    </div>
  )
}

export default RowAnswer