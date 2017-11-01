import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as ServerAPI from '../utils/ServerAPI';

/**
 * @description Component rendered when "Edit" is clicked on a comment
 */
class CommentEdit extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            body: []
        }
    }

    componentDidMount(){
        let comment = this.props.comments.find(comment => comment.id === this.state.id)

        this.setState({
            body: comment.body
        })

    }

    submitComment = (e) => {

        e.preventDefault();

        const commentData = {
            id: this.props.id,
            body: e.target.body.value,
            timestamp: Date.now()
        }

        ServerAPI.updateComment(commentData.id, commentData.body, commentData.timestamp);        
        this.props.commentEdit(commentData);
        //this.props.history.push('/')
    }   


    handleChangeBody = (e) => {
        this.setState({
            body: e.target.value
        })
    }

    render(){
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
                        <form onSubmit={this.submitComment}>
                            <h2>Edit Comment</h2>
                                <div className="form-group">
                                    <label className="col-form-label">Say what is on your mind</label>
                                    <input  type="textarea" 
                                            className="form-control" 
                                            name="body"
                                            value={this.state.body}
                                            onChange={this.handleChangeBody}
                                            />
                                </div>
                                <br/>
                                <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({comments}) => {
    return {
        comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        commentEdit: (data) => dispatch(actions.comment_edit(data))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit);