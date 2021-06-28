import React from "react"
import "./Rows.css"
import Row from "../Row/Row"

const Rows = () => {
  return (
    <div>
      {new Array(10).fill().map((value, idx) => (
        <div key={'id' + idx}>
          <Row />
        </div>
      ))}
    </div>
  )
}

export default Rows
