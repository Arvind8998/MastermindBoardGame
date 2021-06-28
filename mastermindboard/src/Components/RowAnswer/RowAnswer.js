import React from "react"
import './RowAnswer.css'
const RowAnswer = () => {
  return (
    <div className="rowAnswer__container">
      {new Array(4).fill().map((el, idx) => (
        <div className="rowAnswer"></div>
      ))}
    </div>
  )
}

export default RowAnswer
