const initialState = {
  value: 0,
  title: null,
  desc: null,
  data: []
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE': {
      const { data } = state
      data.push(action.value)
      return {
        ...initialState,
        value: state.value + 1,
        data
      }
      break
    }
    case 'DECREASE': {
      const {data} = state
      data.splice(action.payload, 1)
      return {
        ...state,
        data
      }
      break
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default todo