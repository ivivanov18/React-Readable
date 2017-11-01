import React from 'react';
import {Link} from 'react-router-dom';

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
    <div className="container">
        <p>
            Comment: {body}<br/>
            Vote Score: {voteScore}<br/>
            From: {author}<br/>
        </p>
        <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">
                    <Link to={`/comments/${id}/edit`} className="btn btn-primary">Edit</Link>
                </button>
                <button type="button" 
                        className="btn btn-primary"
                        onClick={() => onClickDeleteButton({id})}>Delete</button>
                <button type="button" 
                        className="btn btn-primary"
                        onClick={()=>onClickUpVoteButton({id: id, option:"upVote"})}>Up vote</button>
                <button type="button" 
                        className="btn btn-primary"
                        onClick={() => onClickDownVoteButton({id: id, option:"downVote"})}>Down Vote</button>
            </div>
    </div>
);

export default Comment;
