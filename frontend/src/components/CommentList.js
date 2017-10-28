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
    <ul>
        {comments.map(comment =>
            <Comment key={comment.id} 
                    {...comment} 
                    onClickDeleteButton={onClickDeleteButton}
                    onClickUpVoteButton={onClickUpVoteButton}
                    onClickDownVoteButton={onClickDownVoteButton}/>
        )}
    </ul>

}

export default CommentList;