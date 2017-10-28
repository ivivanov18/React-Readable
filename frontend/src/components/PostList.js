import React from 'react';
import Post from './Post';

/**
 * 
 * @param {*} param0 
 */
const PostList = ({
    posts,
    onClickDeleteButton,
    onClickUpVoteButton,
    onClickDownVoteButton
}) => (
    <ul>   
        {posts.map(post => 
            <Post 
                key={post.id}
                {...post}
                onClickDeleteButton={onClickDeleteButton}
                onClickUpVoteButton={onClickUpVoteButton}
                onClickDownVoteButton={onClickDownVoteButton}
            />   
        )}
    </ul>
);

export default PostList;