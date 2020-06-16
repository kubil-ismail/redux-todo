const initialState = {
  value: 0,
  title: null,
  desc: null
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return {
        ...initialState,
        value: state.value + 1,
        title: state.title = action.value.title,
        desc: state.desc = action.value.desc
      }
      break
    }
    case 'DECREASE': {
      return {
        ...initialState,
        value: state.value = 0,
        title: state.title = null,
        desc: state.desc = null
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