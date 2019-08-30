import React from 'react';
import * as actions from './actionTypes';

const baseUrl = "http://epower.ng/wp-json/wp/v2/posts?page=";

export const checkLoginStatus = () => {
  return (dispatch, getState) => getState().auth.isAuthenticated;
};

export const fetPost = (email, password) => {
//   return async(dispatch, getState) => {
//     var bodyFormData = new FormData();

//     axios.post('login', {
//         email,
//         password
//       }).then(resp => {
//         // dispatch({
//         //   type: actions.GET_MOVIE,
//         //   payload: resp.data
//         // });

//         let config = {
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'aapplication/x-www-form-urlencoded',
//             'Authorization': 'Bearer ' + resp.data.success.token,
//           }
//         }

//         axios.post('details',{}, config)
//         .then(resp => {
//           console.log(JSON.stringify(resp.data));
//         });

//       })
//       .catch(err => {
//         console.log(err);
//       });

//     // if(email == "admin" && password == "admin"){
//     //     await dispatch({
//     //         type: actions.USER_LOGIN,
//     //         payload: {
//     //             username: "Admin",
//     //             email: "admin@moviesoasis.com",
                
//     //             roles: ['ADMIN'],
//     //             permissions: [
//     //                 'CAN_ADD_USER', 'CAN_UPDATE_USER', 'CAN_DELETE_USER',
//     //                 'CAN_ADD_MOVIES', 'CAN_UPDATE_MOVIES', 'CAN_DELETE_MOVIES',
//     //                 'CAN_LAUNCH_BOTS', 'CAN_UPLOAD_MOVIES'
//     //             ],
//     //         }
//     //     });
//     // }
//     // else {
//     //     return false;
//     // }

//     return false;
//   };
};

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
