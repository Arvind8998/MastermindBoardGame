export const initialState = {
  selectedColour: "",
  rows: [],
  aiAnswer: [
    { 0: "greenColor" },
    { 1: "tealColor" },
    { 2: "blueColor" },
    { 3: "violetColor" },
  ],
  isGameWon: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_COLOUR":
      return {
        ...state,
        selectedColour: action.selectedColour,
      }
    case "CREATE_ROWS":
      return {
        ...state,
        rows: action.rowsData,
      }
    case "UPDATE_ROWS":
      const currRows = state.rows
      let rowNo = action.selectedCircle.split("_")[0]
      const circleNo = action.selectedCircle.split("_")[1]
      currRows[rowNo][circleNo].color = state.selectedColour
      return {
        ...state,
        rows: currRows,
      }
    case "VALIDATE_ROW":
      const rowNum = action.rowNo
      const currRowData = state.rows[rowNum]
      let rows = state.rows
      let isGameWon = true;
      Object.values(currRowData).forEach((el, idx) => {
        if (el.color.split(" ")[1] === state.aiAnswer[idx][idx]) {
          currRowData[idx].isCorrectMove = true
          currRowData[idx].isSubmitted = true
        } else {
          isGameWon = false
          currRowData[idx].isCorrectMove = false
          currRowData[idx].isSubmitted = true
        }
      })
      debugger
      rows[rowNum] = currRowData

      return {
        ...state,
        rows: rows,
        isGameWon: isGameWon,
      }
    default:
      return state
  }
}

export default reducer
