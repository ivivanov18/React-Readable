import React, { Component} from 'react';
import * as actions from '../actions';
import * as ServerAPI from '../utils/ServerAPI';
import Post from './Post';
import CommentList from './CommentList';
import {connect} from 'react-redux';

/**
 * @description appears when clicked on post's title
 * @description contains full info on given Post and comments for this post
 * @description the component 
 * @param {string} id - unique id of the post from link /:category/:id
 */
class PostDetail extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            comments: [],
            sortBy: "byDate"
        }
    }

    componentDidMount(){
        ServerAPI.getAllCommentsByPost(this.props.match.params.id).then((comments) => {
            this.props.load_comments(comments);
        })
    }

    componentWillReceiveProps(nextProps){
        
    }
    /**
     * @description Finds the given Post (all info) corresponding to the id passed in the link
     */
    findPost = () => {
        return this.props.posts.find(post => 
            post.id === this.props.match.params.id) ;
    }
    
    /**
     * @description checks the sorting criteria and returns the sorted array accordingly
     * @returns {array} comments sorted (which are passed to the CommentList component)
     */
    getComments = () => {
        if(this.state.sortBy === "byVoteScore")
            return this.props.comments.sort(function(commentA, commentB){
                return commentB.voteScore - commentA.voteScore
            })
        return this.props.comments.sort(function(commentA, commentB){
            return commentB.timestamp - commentA.timestamp
        })
    }

    /**
     * @description changes the sorting criteria
     */
    sortByDateDesc = () => {
        this.setState({sortBy: "byDate"})
    }
    
    /**
     * @description changes the sorting criteria
     */
    sortByNumberVoteDesc = () => {
        this.setState({sortBy: "byVoteScore"})
    }
    

    render(){
        if(this.findPost() === undefined || this.findPost() === null){
            return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="list-group">
                            <a href="/" className="list-group-item list-group-item-action">
                                Back
                            </a>
                        </div>
                    </div>

                    <div className="col-10">
                        <div className="alert alert-danger" role="alert">
                            Post not Found
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="list-group">
                                <a href="/" className="list-group-item list-group-item-action">
                                    Back
                                </a>
                            </div><br/>
                            <div className="list-group">
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => this.sortByDateDesc()}>Sort by Date
                            </button>                        
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => this.sortByNumberVoteDesc()}>Sort by Votes
                            </button>
                        </div>
                        </div>
                        <div className="col-10">
                            <Post {...this.findPost()}
                                onClickDeleteButton={this.props.onClickPostDeleteButton}
                                onClickUpVoteButton={this.props.onClickPostUpVoteButton}
                                onClickDownVoteButton={this.props.onClickPostDownVoteButton}/>
                            <br/>
                            <CommentList 
                                comments={this.getComments()}
                                onClickDeleteButton={this.props.onClickCommentDeleteButton}
                                onClickDownVoteButton={this.props.onClickCommentDownVoteButton}
                                onClickUpVoteButton={this.props.onClickCommentUpVoteButton}
                            />
                        </div>
                    </div>
                </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({ 
    load_comments: (data) => dispatch(actions.comment_load_all(data)),  
});

const mapStateToProps = ({posts, comments}) => ({
    posts,
    comments
});

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);