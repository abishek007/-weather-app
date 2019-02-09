export const createActionCreator = action => arg => ({
    type: action,
    data: arg,
  })
  
  export const createSignalAction = function createSignalAction(reducerName, base) {
    return ["REQUEST", "SUCCESS", "FAILURE", "PENDING", "CLEAR"].reduce((prev, curr) => {
      const newPrev = prev
      newPrev[curr] = `SIGNAL/${reducerName}/${base}/${curr}`
      newPrev[curr.toLowerCase()] = createActionCreator(prev[curr])
      return newPrev
    }, {})
  }