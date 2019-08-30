import * as actions from './actionTypes';

const baseUrl = "http://epower.ng/wp-json/wp/v2/posts?page=";

export const fetchPosts = (pageNumber) => {
  return (dispatch) => {

  fetch( baseUrl + pageNumber,{ headers: {'Content-Type': 'application/json'}})
      .then(r => r.json())
      .then(response => {
        if(response.hasOwnProperty("data") && response.data.status == 400){
            dispatch({
                type: actions.UPDATE_STATE,
                payload: {
                    posts: [],
                    isLoading: false,
                    EOC: true,
                  }
              });
        }
        else {
            dispatch({
                type: actions.UPDATE_STATE,
                payload: {
                    posts: response,
                    isLoading: false,
                    EOC: false,
                  }
              });
        }
      }).catch(error => {
        dispatch({
            type: actions.UPDATE_STATE,
            payload: {
                posts: null,
                isLoading: false,
                EOC: false,
              }
          });
        console.error(error);
      })
    }
};
