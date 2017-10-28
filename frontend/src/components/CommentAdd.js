import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as ServerAPI from '../utils/ServerAPI';
import * as actions from '../actions';


class CommentAdd extends Component{
    constructor(props){
        super(props);
        this.nextId = 2134;
    }

    submitComment = (e) => {
        e.preventDefault();
        
        const commentData = {
            id: ++this.nextId,
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            timestamp: Date.now(),
            voteScore: 0,
            deleted: false,
            parentDeleted: false,
            parentId: this.props.postParentId
        }

        this.props.createComment(commentData);
        ServerAPI.addComment(commentData);
    }


    render(){
        return(
                <div class="container">
                    <form onSubmit={this.submitComment}>
                        <h2>New Comment</h2>
                            <div class="form-group">
                                <label class="col-form-label">Title</label>
                                <input type="text" class="form-control" name="title"/>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Comment on</label>
                                <input type="textarea" class="form-control" name="body"/>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Author</label>
                                <input type="text" class="form-control" name="author" placeholder="Author"/>
                            </div>
                            <br/>
                            <button class="btn btn-primary">Submit</button>
                    </form>
                </div>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    createComment: (data) => dispatch(actions.comment_add(data))    
});

export default connect(null, mapPropsToDispatch)(CommentAdd);