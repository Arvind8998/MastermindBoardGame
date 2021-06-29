export const initialState = {
  selectedColour: "",
  rows: [],
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
      const rowNo = action.selectedCircle.split("_")[0]
      const circleNo = action.selectedCircle.split("_")[1]
      currRows[rowNo][circleNo] = state.selectedColour
      return {
        ...state,
        rows: currRows,
      }
    default:
      return state
  }
}

export default reducer
