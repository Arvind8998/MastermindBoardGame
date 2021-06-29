import React from "react"
import "./Rows.css"
import Row from "../Row/Row"
import UserOptions from "../UserOptions/UserOptions"
import { useEffect, useState } from "react"
import { useStateValue } from "../../StateProvider"


const Rows = () => {
  const [{ rows, selectedColour }, dispatch] = useStateValue()
  let rowsData = []

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      let objData = {}
      for (let j = 0; j < 4; j++) {
        objData[j] = "white"
      }
      rowsData.push(objData)
    }
    dispatch({
      type: "CREATE_ROWS",
      rowsData: rowsData,
    })
  }, [dispatch])

  return (
    <div className="rows__Container">
      <div>
        {rows.length >0 && rows.map((value, idx) => (
          <div key={"id" + idx}>
            <Row rowInfo={rows[idx]} rowNo={idx} />
          </div>
        ))}
      </div>
      <UserOptions />
    </div>
  )
}

export default Rows
