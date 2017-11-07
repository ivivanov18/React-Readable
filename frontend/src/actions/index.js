//Actions for posts
export const POST_ADD = 'POST_ADD';
export const POST_EDIT = 'POST_EDIT';
export const POST_DELETE = 'POST_DELETE';
export const POST_LOAD_ALL = 'POST_LOAD_ALL';
export const POST_UP_VOTE = 'POST_UP_VOTE';
export const POST_DOWN_VOTE = 'POST_DOWN_VOTE';

//Actions for Comments
export const COMMENT_ADD = 'COMMENT_ADD';
export const COMMENT_EDIT = 'COMMENT_EDIT';
export const COMMENT_DELETE = 'COMMENT_DELETE';
export const COMMENT_UP_VOTE = 'COMMENT_UP_VOTE';
export const COMMENT_DOWN_VOTE = 'COMMENT_DOWN_VOTE';
export const COMMENT_LOAD_ALL = 'COMMENT_LOAD_ALL';

//Actions for categories
export const CATEGORY_LOAD_ALL = 'CATEGORY_LOAD_ALL';

//Actions for category filter
export const SHOW_ALL_CATEGORY = 'SHOW_ALL_CATEGORY';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

/////////////////////POSTS///////////////////////
export function post_load_all(posts){
    return {
        type: POST_LOAD_ALL,
        posts: posts
    }
}

export function post_add({title, body, author, category, id, timestamp, deleted, voteScore}){
    return {
        type: POST_ADD,
        id,
        timestamp,
        title,
        body,
        author,
        category,
        deleted,
        voteScore
    }
}

export function post_edit({title, body}){
    return {
        type: POST_EDIT,
        title,
        body
    }
}

export function post_delete({id}){
    return {
        type: POST_DELETE,
        id
    }
}

export function post_up_vote({id}){
    return {
        type: POST_UP_VOTE,
        id
    }
}

export function post_down_vote({id}){
    return {
        type: POST_DOWN_VOTE,
        id
    }
}


/////////////////////COMMENTS///////////////////////
export function comment_load_all(comments){
    return {
        type: COMMENT_LOAD_ALL,
        comments
    }
}

export function comment_add({ body, author, id, timestamp, deleted, voteScore, parentDeleted, parentId}){
    return {
        type: COMMENT_ADD,
        id,
        timestamp,
        body,
        author,
        deleted,
        voteScore,
        parentDeleted,
        parentId
    }
}

export function comment_delete({id}){
   return{
        type: COMMENT_DELETE,
        id
   }
}

export function comment_up_vote({id}){
     return{   
        type: COMMENT_UP_VOTE,
        id
     }
}

export function comment_down_vote({id}){
    return {
        type: COMMENT_DOWN_VOTE,
        id
    }
}

export function comment_edit({id, timestamp, body}){
    return {
        type: COMMENT_EDIT,
        id,
        timestamp,
        body
    }

}
/////////////////////CATEGORIES///////////////////////
export function category_load_all(categories){
    return {
        type: CATEGORY_LOAD_ALL,
        categories
    }
}

export function setCategoryFilter(categoryName){
    return {
        type: SET_CATEGORY_FILTER,
        categoryName
    }
}


