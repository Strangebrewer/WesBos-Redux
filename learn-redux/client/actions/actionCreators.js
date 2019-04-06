// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(post_id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    post_id,
    author,
    comment
  }
}

// remove comment
export function removeComment(post_id, index) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    post_id
  }
}