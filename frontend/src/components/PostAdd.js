import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as ServerAPI from '../utils/ServerAPI';

/**
 * @description Component rendered when "New Post" is clicked on the main page
 * @description Renders a form to enter main info on post (title, body, author, category)
 */
class PostAdd extends Component{

    /**
     * @description Function called when "Submit" button is clicked
     * @description checks for blanks, gathers data, dispatches actions & creates post on backend
     */
    submitPost = (e) => {
        
        e.preventDefault();
        
        if(e.target.title.value === "" || 
            e.target.body.value === "" || 
            e.target.author.value === ""){
                alert("Every field is mandatory!")
                return
            }
            
        const postData = {
            id: (Math.floor((Math.random() * 1000000) + 1)).toString(),
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            category: e.target.category.value,
            timestamp: Date.now(),
            voteScore: 0
        }
        
        ServerAPI.addPost(postData);
        this.props.createPost(postData);
        this.props.history.push('/')
        
    }


    render() {
        if(this.props.categories === null){
            return <div></div>
        }

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
                            <h2>New Post</h2>
                                <div className="form-group">
                                    <label className="col-form-label">Title</label>
                                    <input type="text" className="form-control" name="title"/>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Say what is on your mind</label>
                                    <input type="textarea" className="form-control" name="body"/>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" name="author" placeholder="Author"/>
                                    </div>
                                    <div className="col">    
                                        <select name="category" className="custom-select">
                                            {this.props.categories && this.props.categories.categories.map((category) => (
                                                <option key={category.name} value={category.name}>{category.name}</option>
                                            ))}
                                        </select>
                                    </div>
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

const mapStateToProps = ({categories}) => ({
        categories
});

const mapDispatchToProps = dispatch => ({
    createPost: (data) => dispatch(actions.post_add(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);