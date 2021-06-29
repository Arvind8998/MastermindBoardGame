import React from "react"
import "./Row.css"
import RowAnswer from "../RowAnswer/RowAnswer"

const Row = () => {
  return (
    <div className="row_container">
      {new Array(4).fill().map((el, idx) => (
          <div key={"id" + idx} className="row"></div>
      ))}
      <RowAnswer />
    </div>
  )
}

export default Row
