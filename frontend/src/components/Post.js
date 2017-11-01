import React from 'react';
import {Link} from 'react-router-dom';

/**
 * @description Functional component represents a post
 * @param {string} title - the title of the post
 * @param {string} body - the main text of the post
 * @param {string} author - the author of the post
 * @param {string} category - the category of the post
 * @param {number} voteScore - the result of the up votes (+1) and down votes (-1)
 * @param {string} id - the unique id of the post
 * @param {function} onClickDeleteButton - tells the component what to do when deleted clicked
 * @param {function} onClickUpVoteButton - tells the component what to do when up vote clicked
 * @param {function} onClickDownVoteButton - tells the component what to do when down vote clicked
 */
const Post = ({
    title,
    body,
    author,
    category,
    voteScore,
    id,
    onClickDeleteButton,
    onClickUpVoteButton,
    onClickDownVoteButton
}) => (

        <div className="container">
            <Link to={`/${category}/${id}`} params={{title:title, body:body, id:id}}>
                <h4 className="display-4">{title}</h4>
            </Link>
            <p className="lead">{body}</p>
            <hr className="my-4"/>
            <p>
                Vote score: {voteScore}<br/>
                Category: {category}<br/>
                From: {author}
            </p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">
                    <Link to={`/${category}/${id}/edit`} className="btn btn-primary">Edit</Link>
                </button>
                <button type="button" 
                        className="btn btn-primary"
                        onClick={() => onClickDeleteButton({id})}>Delete</button>
                <button type="button" 
                            className="btn btn-primary">
                       <Link to={`/${category}/${id}/comment`} className="btn btn-primary">Add Comment</Link>
                </button>
                <button type="button" 
                        className="btn btn-primary"
                        onClick={()=>onClickUpVoteButton({id: id, option:"upVote"})}>Up vote</button>
                <button type="button" 
                        className="btn btn-primary"
                        onClick={() => onClickDownVoteButton({id: id, option:"downVote"})}>Down Vote</button>
            </div>
            <br/>
            <br/>
            <br/>
        </div>

);

export default Post;