import store from './store'

/* TEST 1 */
console.log(store);

/* TEST 2 */
console.log(store.getState());

/* TEST 3 */
store.dispatch({
  type: "bugAdded",
  payload: { description: "Bug1" }
});
store.dispatch({
  type: "bugRemoved",
  payload: { id: 1 }
});
console.log(store.getState());

/* TEST 4 Subscribe */
store.subscribe(() => {
  console.log("Store Changed!", store.getState());
})

store.dispatch({
  type: "bugAdded",
  payload: { description: "Bug1" }
});

store.dispatch({
  type: "bugRemoved",
  payload: { id: 1 }
});

/* TEST 5 UnSubscribe*/
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
})

store.dispatch({
  type: "bugAdded",
  payload: { description: "Bug1" }
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: { id: 1 }
});



var div = document.createElement("H1");
div.innerHTML = "Test with Inspect";
document.getElementById("root").appendChild(div);
