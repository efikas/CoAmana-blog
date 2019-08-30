import initialState from './store';
import * as actions from './actionTypes';


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case actions.UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default reducer;