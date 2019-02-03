import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import {createPost} from '../actions/postActions';

 class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            titel : '',
            body :''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title : this.state.title,
            body : this.state.body
        };

        this.props.createPost(post);
    }
  render() {
    return (
      <div>
        <h3>Post Form</h3>
        <form >
            <label >Lavel : </label>
            <br />
            <input type = "text" name ="titel"  onChange = {this.onChange} value ={this.state.title}/>
            <br />
            <label >body : </label>
            <br />
            <textarea name="body" onChange = {this.onChange} value ={this.state.body}></textarea>
            <br />
            <br />
            <button  onClick = {this.onSubmit}>click me </button>
        </form>
      </div>
    )
  }
}
PostForm.propType = {
    createPost : PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm);
