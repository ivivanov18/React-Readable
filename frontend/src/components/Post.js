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

        <div class="container">
            <Link to={`/${category}/${id}`} params={{title:title, body:body, id:id}}>
                <h4 class="display-4">{title}</h4>
            </Link>
            <p class="lead">{body}</p>
            <hr class="my-4"/>
            <p>
                Vote score: {voteScore}<br/>
                Category: {category}<br/>
                From: {author}
            </p>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" 
                        class="btn btn-primary"
                        onClick={() => onClickDeleteButton({id})}>Delete</button>
                <button type="button" 
                            class="btn btn-primary">
                       <Link to="/create/post" class="btn btn-primary">Add Comment</Link>
                </button>
                <button type="button" 
                        class="btn btn-primary"
                        onClick={()=>onClickUpVoteButton({id: id, option:"upVote"})}>Up vote</button>
                <button type="button" 
                        class="btn btn-primary"
                        onClick={() => onClickDownVoteButton({id: id, option:"downVote"})}>Down Vote</button>
            </div>
            <br/>
            <br/>
            <br/>
        </div>

);

export default Post;