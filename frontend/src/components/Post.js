import React from 'react';
import {Link} from 'react-router-dom';

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