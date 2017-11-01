import {
  POST_LOAD_ALL,
  POST_ADD,
  POST_EDIT,
  POST_DELETE,
  POST_UP_VOTE,
  POST_DOWN_VOTE,

  COMMENT_ADD,
  COMMENT_EDIT,
  COMMENT_DELETE,
  COMMENT_UP_VOTE,
  COMMENT_DOWN_VOTE,
  COMMENT_LOAD_ALL,

  CATEGORY_LOAD_ALL,

  SHOW_ALL_CATEGORY,
  SET_CATEGORY_FILTER

} from '../actions'
import {combineReducers} from 'redux';

const posts = (state = null, action) => {
  switch (action.type) {
    case POST_LOAD_ALL:
      return action.posts;
    case POST_ADD:
      return [
        ...state,
        {
          id: action.id,
          timestamp: action.timestamp,
          title: action.title,
          body: action.body,
          deleted: action.deleted,
          voteScore: action.voteScore,
          category: action.category,
          author: action.author
        }
      ]

    case POST_EDIT:
      return state.map(post => {
        if(post.id !== action.id)
          return post
        return {
          ...post,
          title: action.title,
          body: action.body
        };
      });
    case POST_DELETE:
      return state.filter(post => post.id !== action.id);
      
    case POST_UP_VOTE:
      return state.map(post => {
        if(post.id !== action.id)
          return post
        return {
          ...post,
          voteScore: post.voteScore + 1
        };
      });

    case POST_DOWN_VOTE:
      return state.map(post => {
        if(post.id !== action.id)
          return post
        return {
          ...post,
          voteScore: post.voteScore - 1
        };
      }); 
  
    default:
      return state;

  }
}

const comments = (state = [], action) => {
  switch(action.type){
    case COMMENT_LOAD_ALL:
      if(state === null || state === undefined)
        return action.comments 
      else{
        return [
          ...state,
          ...action.comments
        ];
      }
    case COMMENT_ADD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          body: action.body,
          deleted: action.deleted,
          parentDeleted: action.deleted,
          voteScore: action.voteScore,
          author: action.author,
          timestamp: action.timestamp
        }
      ]
    case COMMENT_EDIT:
      
      return state.map(comment => {
        if(comment.id !== action.id){
          return comment
        }
        return {
          ...comment,
          timestamp: action.timestamp,
          body: action.body
        }
      });
      
    case COMMENT_DELETE:
      return state.filter(comment => comment.id !== action.id);

    case COMMENT_UP_VOTE:
      return state.map(comment => {
        if(comment.id !== action.id)
          return comment;
        return {
          ...comment,
          voteScore: comment.voteScore + 1
        }
      })
    
    case COMMENT_DOWN_VOTE:
      return state.map(comment => {
        if(comment.id !== action.id)
          return comment
        return {
          ...comment,
          voteScore: comment.voteScore - 1
        }
      })
      
    default:
      return state;
  }
}

const categories = (state = null, action) => {
  switch(action.type){
    case CATEGORY_LOAD_ALL:
      return action.categories;
    default:
      return state;
  }
}

const categoryFilter = (state = SHOW_ALL_CATEGORY, action) => {
  switch(action.type){
    case SET_CATEGORY_FILTER:
      if(action.categoryName === "all")
        return SHOW_ALL_CATEGORY;
      return action.categoryName;
    default:
      return state;
  }
}

const readableAppReducer = combineReducers({
  posts, comments, categories, categoryFilter
});

export default readableAppReducer;
