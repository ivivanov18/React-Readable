const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

/////////////////////POSTS/////////////////////
export const getAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
}

export const addPost = (post) => {
  return fetch(`${api}/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(post)
  })
}

export const votePost = (postId, option) => {
  return fetch(`${api}/posts/${postId}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ option })
    }).then(res => res.json())
}

export const deletePost = (postId) => {
  return fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
}

export const updatePost = (postId, title, bodyPost) => {
  return fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({title: title, body: bodyPost})
  }).then(res => res.json())
}

/////////////////////CATEGORIES/////////////////////  
export const getAllCategories = () => 
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)


/////////////////////COMMENTS/////////////////////
export const getAllCommentsByPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, {headers})
    .then(res => res.json())
    .then(data => data)


export const addComment = (comment) => {
  return fetch(`${api}/comments`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(comment)
  }).then(res => res.json())
}

export const voteComment = (commentId, option) => {
  return fetch(`${api}/comments/${commentId}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ option })
      }).then(res => res.json())
}

export const deleteComment = (commentId) => {
  return fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
}

export const updateComment = (commentId, bodyPost, timestampPost) => {
  return fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({timestamp: timestampPost, body: bodyPost})
  }).then(res => res.json())
}