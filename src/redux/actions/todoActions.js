export const increaseTodo = (title, desc) => {
  return {
    type: 'INCREASE',
    value: {
      title: title,
      desc: desc
    }
  }
}

export const decreaseTodo = () => {
  return {
    type: 'DECREASE'
  }
}

export const resetTodo = () => {
  return {
    type: 'RESET'
  }
}