import React, { Component } from 'react';
import './App.css';
import * as ServerAPI from './utils/ServerAPI';
import * as actions from './actions';
import {connect} from 'react-redux';
import PostList from './components/PostList';
import CategoryList from './components/CategoryList';
import PostAdd from './components/PostAdd';
import PostDetail from './components/PostDetail';
import {Route, Switch} from 'react-router-dom';

/**
 * 
 */
class App extends Component {

  constructor(props) {
    super(props);

    ServerAPI.getAllPosts().then((posts) => {
      this.setState({posts : posts});
      this.props.load_posts(posts);
    });
    
    ServerAPI.getAllCategories().then((categories) => {
      this.props.load_categories(categories)
    })
  }

  /**
   * 
   */
  getVisiblePosts = () => {
    if(this.props.categoryFilter === 'SHOW_ALL_CATEGORY'){
      return this.props.posts;
    }
    return this.props.posts.filter(post => 
      post.category === this.props.categoryFilter
    );
  }

  upVotePost = (data) => {
    this.props.onClickUpVotePost(data);
    ServerAPI.votePost(data.id, data.option);
  }

  downVotePost = (data) => {
    this.props.onClickDownVotePost(data);
    ServerAPI.votePost(data.id, data.option);
  }

  deletePost = (data) => {
    this.props.onClickDeletePost(data);
    ServerAPI.deletePost(data.id);
  }

  //////////COMMENTS///////////
  upVoteComment = (data) => {
    this.props.onClickUpVoteComment(data);
    ServerAPI.voteComment(data.id, data.option);
  }

  downVoteComment = (data) => {
    this.props.onClickDownVoteComment(data);
    ServerAPI.voteComment(data.id, data.option);
  }

  deleteComment = (data) => {
    this.props.onClickDeleteComment(data);
    ServerAPI.deleteComment(data.id);
  }


  /**
   * 
   */
  render() {
    if(this.props.posts === null || this.props.categories === null){
      return <div></div>
    }
    return (
      <div className="App" class="container">
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <div class="row">
                    <div class="col">
                      <CategoryList 
                        categories={this.props.categories}
                        onCategoryClick={this.props.onClickCategoryFilter}
                        currentCategoryFilter={this.props.categoryFilter}/>
                      <br/>
                      <div class="list-group">
                        <a  href="/create/post"
                            class="list-group-item list-group-item-action">New Post
                        </a>
                      </div>
                    </div>
                    <div class="col-10">
                      <PostList 
                        posts={this.getVisiblePosts()}
                        onClickDeleteButton={this.deletePost}
                        onClickUpVoteButton={this.upVotePost}
                        onClickDownVoteButton={this.downVotePost}/>
                    </div>
                  </div>
                </div>
            )}/>
            <Route exact path="/:category" render={() => (
              <div class="row">
                <div class="col">
                  <CategoryList 
                    categories={this.props.categories}
                    onCategoryClick={this.props.onClickCategoryFilter}
                    currentCategoryFilter={this.props.categoryFilter}/>
                  <br/>
                  <div class="list-group">
                    <a  href="/create/post"
                        class="list-group-item list-group-item-action">New Post
                    </a>
                  </div>
                </div>
                <div class="col-10">
                  <PostList 
                    posts={this.getVisiblePosts()}
                    onClickDeleteButton={this.deletePost}
                    onClickUpVoteButton={this.upVotePost}
                    onClickDownVoteButton={this.downVotePost}/>
                </div>
              </div>
            )}/>
            <Route path="/create/post" component={PostAdd}/>
            <Route path="/:category/:id" render={(props) => 
              <PostDetail
                {...props}
                id={props.match.params.id}
                onClickPostDeleteButton={this.deletePost}
                onClickPostUpVoteButton={this.upVotePost}
                onClickPostDownVoteButton={this.downVotePost}
                onClickCommentDeleteButton={this.deleteComment}
                onClickCommentUpVoteButton={this.upVoteComment}
                onClickCommentDownVoteButton={this.downVoteComment}/>
              }/>
          </Switch>
      </div>
    );
  }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => ({
    load_posts: (data) => dispatch(actions.post_load_all(data)),
    
    load_categories: (data) => dispatch(actions.category_load_all(data)),
    onClickCategoryFilter: (data) => dispatch(actions.setCategoryFilter(data)),
    
    onClickDeletePost: (data) => dispatch(actions.post_delete(data)),
    onClickEditPost: (data) => dispatch(actions.post_edit(data)),
    onClickUpVotePost: (data) => dispatch(actions.post_up_vote(data)),
    onClickDownVotePost: (data) => dispatch(actions.post_down_vote(data)),

    onClickDeleteComment: (data) => dispatch(actions.comment_delete(data)),
    onClickEditComment: (data) => dispatch(actions.comment_delete(data)),
    onClickUpVoteComment: (data) => dispatch(actions.comment_up_vote(data)),
    onClickDownVoteComment: (data) => dispatch(actions.comment_down_vote(data))
});

const mapStateToProps = ({posts, comments, categories, categoryFilter}) => {
  return {
    posts,
    comments,
    categories,
    categoryFilter
  }
}

/*App.contextTypes = {
  store: PropTypes.object
}*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
