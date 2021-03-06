import * as actions from './actionTypes'

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: { description: "Bug1" }
  }
}

export const bugRemoved = id => {
  return {
    type: actions.BUG_REMOVED,
    payload: { id }
  }
}

export const bugResolved = id => {
  return {
    type: actions.BUG_RESOLVED,
    payload: { id }
  }
}