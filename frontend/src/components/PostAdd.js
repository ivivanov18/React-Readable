import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as ServerAPI from '../utils/ServerAPI';

class PostAdd extends Component{
    
    constructor(props){
        super(props);
        this.nextId = 1230;
    }

    submitPost = (e) => {
        e.preventDefault();
        
        const postData = {
            id: (++this.nextId).toString(),
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            category: e.target.category.value,
            timestamp: Date.now(),
            voteScore: 0
        }

        this.props.createPost(postData);
        ServerAPI.addPost(postData);
    }


    render() {
        if(this.props.categories === null){
            return <div></div>
        }

        return (

            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="list-group">
                            <a href="/" class="list-group-item list-group-item-action">
                                Back
                            </a>
                        </div>
                    </div>
                    <div class="col-10">
                        <form onSubmit={this.submitPost}>
                            <h2>New Post</h2>
                                <div class="form-group">
                                    <label class="col-form-label">Title</label>
                                    <input type="text" class="form-control" name="title"/>
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Say what is on your mind</label>
                                    <input type="textarea" class="form-control" name="body"/>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" name="author" placeholder="Author"/>
                                    </div>
                                    <div class="col">    
                                        <select name="category" class="custom-select">
                                            {this.props.categories && this.props.categories.categories.map((category) => (
                                                <option key={category.name} value={category.name}>{category.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <br/>
                                <button class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({categories}) => ({
        categories
});

const mapDispatchToProps = dispatch => ({
    createPost: (data) => dispatch(actions.post_add(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);