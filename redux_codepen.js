function print(msg) {
  document.write(msg)
}
function printobj(obj) {
  document.write(JSON.stringify(obj) + '<br/>')
}

const {createStore} = Redux;
const init_state = { name: 'itay', time: new Date(), garage: [] }
//print(createStore)

function myReducer(state = init_state, action) {
  print('-------- in my reducer ----------- <br />')
  print('state: ')
  printobj(state)
  print('action: ')
  printobj(action)
  if (action.type === 'ADD_CAR') {
    return {
      ... state,
      garage: [...state.garage, action.car]
    }
  }
  return state;
}

const store = createStore(myReducer);
store.subscribe(() => {
  print('store event occured ... current state: ')
  printobj(store.getState())
})
store.dispatch( { type: 'ADD_CAR', car: { id: '87-123-22', model: 'Honda'}} );
store.dispatch( { type: 'ADD_CAR', car: { id: '11-333-44', model: 'Renault'}} );
