import { FETCH_POST, NEW_POST, SEARCH_POST, DELETE_POST } from './types';

export const fetchPost = () => dispatch => {
    // thunk will help to call dispatch asyn call

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POST,
                payload: posts
            })
        );
}

export const searchPost = (searchData) => dispatch => {
    // thunk will help to call dispatch asyn call
    // https://jsonplaceholder.typicode.com/posts?postId=1&id=1
    fetch('https://jsonplaceholder.typicode.com/posts?postId='+searchData.postId+'&id='+searchData.id)
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: SEARCH_POST,
                payload: posts
            })
        );
}

export const createPost = (postData) => dispatch => {
 
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
           header : {
               'content-type' : 'application/json'
           } ,
           body : JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        })
        );
    
};

export const deletePost = (filteredPot) => dispatch => {
console.log(filteredPot);
(function () {
    dispatch({
        type : DELETE_POST,
        payload : filteredPot
    });
    
  }());



};

export function fetchPost1() {
    // thunk will help to call dispatch asyn call
    return function (dispatch) {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POST,
                payload: posts
            }));
    }

}