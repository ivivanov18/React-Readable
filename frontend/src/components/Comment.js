import React from 'react';

/**
 * 
 * @param {*} param0 
 */
const Comment = ({
    id,
    parentId,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted,
    onClickDeleteButton,
    onClickUpVoteButton,
    onClickDownVoteButton
}) => (
    <div class="container">
        <p>
            Comment: {body}<br/>
            Vote Score: {voteScore}<br/>
            From: {author}<br/>
        </p>
        <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" 
                        class="btn btn-primary"
                        onClick={() => onClickDeleteButton({id})}>Delete</button>
                <button type="button" 
                        class="btn btn-primary"
                        onClick={()=>onClickUpVoteButton({id: id, option:"upVote"})}>Up vote</button>
                <button type="button" 
                        class="btn btn-primary"
                        onClick={() => onClickDownVoteButton({id: id, option:"downVote"})}>Down Vote</button>
            </div>
    </div>
);

export default Comment;
