import Container from './Container'

it('UpdateTodo when given a new todo ', () => {
  const todoArray = [
    { id: 5, description: 'rahul', status: false },
    { id: 6, description: 'safdsf', status: true },
    { id: 7, description: 'dsf', status: true },
    { id: 8, description: 'asdasf', status: false }
  ]
  const obj = new Container()
  const newtodoArray = obj.updateTodoArray(todoArray, { id: 7, description: 'Manav', status: false })
  expect(newtodoArray[2].description).toEqual('Manav')
  expect(newtodoArray[2].status).toEqual(false)
})
