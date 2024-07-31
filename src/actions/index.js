import { 
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
 } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://swapi.dev/api/people/')
        //axios.get('https://api.dailysmarty.com/posts')
        .then(response => {
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.results
            })
        })
    }
}

export function fetchPostsWithQuery(query, callback) {
    return function(dispatch) {
      axios.get(`https://swapi.dev/api/people/?search=${query}`)
      //axios.get(`https://api.dailysmarty.com/search?q=${query}`)
        .then(response => {
          dispatch({
            type: SET_RESULTS_POSTS,
            payload: response.data.results
          })
          if(callback) { callback() }
        })
    }
  }