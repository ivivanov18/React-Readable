import React from 'react';
import {Link} from 'react-router-dom';

/**
 * @description Function component represents a comment
 * @param {string} id - the unique id of the comment
 * @param {string} parentId - the unique id of the post to which the comment refers to
 * @param {string} body - the text of the comment
 * @param {string} author - the author of the comment
 * @param {number} voteScore - the result of the up votes (+1) and down votes (-1)
 * @param {boolean} deleted - flag to tell deleted
 * @param {boolean} parentDeleted - flag to tell the post refered to is deleted
 * @param {function} onClickDeleteButton - tells the component what to do when delete clicked
 * @param {function} onClickUpVoteButton - tells the component what to do when up vote clicked
 * @param {function} onClickDownVoteButton - tells the component what to do when down vote clicekd
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
