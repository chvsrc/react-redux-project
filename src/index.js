import store from './store'
//import * as actionTypes from './actionTypes'
import * as actions from './actions'

// /* TEST 1 */
// console.log(store);

// /* TEST 2 */
// console.log(store.getState());

// /* TEST 3 */
// store.dispatch({
//   type: "bugAdded",
//   payload: { description: "Bug1" }
// });
// store.dispatch({
//   type: "bugRemoved",
//   payload: { id: 1 }
// });
// console.log(store.getState());

// /* TEST 4 Subscribe */
// store.subscribe(() => {
//   console.log("Store Changed!", store.getState());
// })

// store.dispatch({
//   type: "bugAdded",
//   payload: { description: "Bug1" }
// });

// store.dispatch({
//   type: "bugRemoved",
//   payload: { id: 1 }
// });

// /* TEST 5 UnSubscribe*/
// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed!", store.getState());
// })

// store.dispatch({
//   type: "bugAdded",
//   payload: { description: "Bug1" }
// });

// unsubscribe();

// store.dispatch({
//   type: "bugRemoved",
//   payload: { id: 1 }
// });

/* TEST 6 */
// store.dispatch({
//   type: actionTypes.BUG_REMOVED,
//   payload: { id: 1 }
// });

/* TEST 7 */
store.dispatch(actions.bugAdded('Bug 1'));
console.log(store.getState());
store.dispatch(actions.bugResolved(1));
console.log(store.getState());
store.dispatch(actions.bugRemoved(1));
console.log(store.getState());


var div = document.createElement("H1");
div.innerHTML = "Test with Inspect";
document.getElementById("root").appendChild(div);
