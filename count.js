function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function reducer (count = 0, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return count + action.payload
        default:
            return count
    }
}

export default reducer;