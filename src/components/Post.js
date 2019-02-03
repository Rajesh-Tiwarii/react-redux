import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPost,deletePost} from '../actions/postActions';


 class Post extends Component {
    componentWillMount(){
        this.props.fetchPost();
    }
   
    componentWillReceiveProps(nextProps){
      if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost);
      }

    }
    deletePostSelected(e){
      debugger;
      let filteredPosts = this.props.posts.filter(post =>{
        if(e.target.title !== post.title)
        return post;
      });
      this.props.deletePost(filteredPosts);
    }
  render() {
      const postItems = this.props.posts.map(post =>(
        <div key = {post.id}>
            <h3>{post.title} <button title ={post.title} onClick = {this.deletePostSelected.bind(this)}>delete</button> </h3>
            <p>{post.body}</p>

        </div>
      ))    ;
    return (
      <div>
        <h1>There are some Post </h1>
        {postItems}
      </div>
    )
  }
}
// Post.propTypes = {
//     fetchPost : PropTypes.func.isRequired,
//     posts : PropTypes.array.isRequired,
//     newpost : PropTypes.object
// }
const mapStateToProps = state =>({
    posts : state.posts.items,
    newPost : state.posts.item
});
export default connect (mapStateToProps,{fetchPost,deletePost})(Post);