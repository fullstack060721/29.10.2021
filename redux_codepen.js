function print(msg) {
  document.write(msg)
}
function printobj(obj) {
  document.write(JSON.stringify(obj) + '<br/>')
}

const {createStore} = Redux;
const init_state = { name: 'itay', time: new Date(), posts: [] }
//print(createStore)

function myReducer(state = init_state, action) {
  print('------- in reducer ------- ')
  print(' state (before update): ')
  printobj(state)
  print(' action: ')
  printobj(action)
  if (action.type == 'ADD_POST') {
    // returns state
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }
  return state;
}

const store = createStore(myReducer)
store.subscribe(() => {
  print('store event occured ... new state: ')
  printobj(store.getState())
})

store.dispatch( {type: 'ADD_POST', post: 'NICE POST'})
store.dispatch( {type: 'ADD_POST', post: 'NICE POST 2'})
