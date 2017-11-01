import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as ServerAPI from '../utils/ServerAPI';
import * as actions from '../actions';

/**
 * @description Component rendered when "Add Comment" is clicked
 */
class CommentAdd extends Component{

    /**
     * @description Function called when "Submit" button is clicked
     * @description checks for blanks, gathers data, dispatches actions & creates post on backend
     * @param {event} 
     */
    submitComment = (e) => {
        e.preventDefault();
        
        if(e.target.body.value === ""|| e.target.author.value === ""){
            alert("Every field is mandatory!")
            return
        }
        
        const commentData = {
            id: (Math.floor((Math.random() * 1000000) + 1)).toString(),
            body: e.target.body.value,
            author: e.target.author.value,
            timestamp: Date.now(),
            voteScore: 0,
            deleted: false,
            parentDeleted: false,
            parentId: this.props.match.params.postId
            
        }
        this.props.createComment(commentData, () => this.props.history.push('/'));
    }


    render(){
        return(
                <div className="container">
                    <form onSubmit={this.submitComment}>
                        <h2>New Comment</h2>
                            <div className="form-group">
                                <label className="col-form-label">Comment on</label>
                                <input type="textarea" className="form-control" name="body"/>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Author</label>
                                <input type="text" className="form-control" name="author" placeholder="Author"/>
                            </div>
                            <br/>
                            <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    createComment: (data, callback) => (
        ServerAPI.addComment(data).
        then((comment) => dispatch(actions.comment_add(comment))).
        then(() => callback())
    )
});

export default connect(null, mapPropsToDispatch)(CommentAdd);