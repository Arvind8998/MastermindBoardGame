import React from "react"
import "./Rows.css"
import Row from "../Row/Row"
import UserOptions from "../UserOptions/UserOptions"

const Rows = () => {
  return (
    <div className="rows__Container">
      <div>
        {new Array(10).fill().map((value, idx) => (
          <div key={"id" + idx}>
            <Row />
          </div>
        ))}
      </div>
      <UserOptions />
    </div>
  )
}

export default Rows
