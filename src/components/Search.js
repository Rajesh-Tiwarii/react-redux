import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {searchPost} from '../actions/postActions';


class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      postId: '',
      id: ''
    }

    this.searchFORPost = this.searchFORPost.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.items);
    }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  }

  searchFORPost(e) {
    e.preventDefault();
    const searchdata = {
      postId: this.state.postId,
      id: this.state.id
    };

    this.props.searchPost(searchdata);
  }
  render() {
    return (
      <div>
        <form> <br />
          <input type="text" name="id" onChange={this.onChange} value={this.state.id} placeholder ='id'/> <br />
          <input type="text" name="postId" onChange={this.onChange} value={this.state.postId} placeholder ='postId'/> <br />
          <button onClick={this.searchFORPost}> click me go get post </button>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
    searchPost : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
}
const mapStateToProps = state =>({
    posts : state.posts.items,
});
export default connect (mapStateToProps,{searchPost})(Search);
