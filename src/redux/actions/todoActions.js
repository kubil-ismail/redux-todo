export const increaseTodo = (title, desc) => {
  return {
    type: 'INCREASE',
    value: {
      title: title,
      desc: desc
    }
  }
}

export const decreaseTodo = (id) => {
  return {
    type: 'DECREASE',
    payload: id
  }
}

export const resetTodo = () => {
  return {
    type: 'RESET'
  }
}