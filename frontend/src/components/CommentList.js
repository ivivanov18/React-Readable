import React from 'react';
import Comment from './Comment';


const CommentList = ({
    comments,
    onClickUpVoteButton,
    onClickDownVoteButton,
    onClickDeleteButton
}) => {
    return (comments === null || comments === undefined) 
    ? <div></div>
    : 
    <div className="container">
        <h5>Number of comments: {comments.length}</h5><br/>
        {comments.map(comment =>
            <Comment key={comment.id} 
                    {...comment} 
                    onClickDeleteButton={onClickDeleteButton}
                    onClickUpVoteButton={onClickUpVoteButton}
                    onClickDownVoteButton={onClickDownVoteButton}/>
        )}
    </div>

}

export default CommentList;