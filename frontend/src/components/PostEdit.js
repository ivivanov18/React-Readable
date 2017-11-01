import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as ServerAPI from '../utils/ServerAPI';

class PostEdit extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            title: [],
            body: []
        }
    }

    componentDidMount(){
        let post = this.props.posts.find(post => post.id === this.state.id)

        this.setState({
            title: post.title,
            body: post.body
        })
    }

    submitPost = (e) => {

        e.preventDefault();

        const postData = {
            id: this.props.id,
            title: e.target.title.value,
            body: e.target.body.value
        }
        this.props.postEdit(postData);
        ServerAPI.updatePost(postData.id, postData.title, postData.body);
        //this.props.history.push('/')
    }   

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
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
                        <form onSubmit={this.submitPost}>
                            <h2>Edit Post</h2>
                                <div className="form-group">
                                    <label className="col-form-label">Title</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.handleChangeTitle}/>
                                </div>
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

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postEdit: (data) => dispatch(actions.post_edit(data))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);