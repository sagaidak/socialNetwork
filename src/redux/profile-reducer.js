import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id: 1, post: "Hi, how are you?", likes: 5},
        {id: 2, post: "Lost in the oblivion", likes: 10},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: action.post,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId=2) => (dispatch) => {
    return profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        });
};
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserStatus = (userId) => (dispatch) => {
    return profileAPI.getUserStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res));
        });
};
export const updateUserStatus = (status) => (dispatch) => {
    return profileAPI.updateUserStatus(status)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setUserStatus(status));
            }

        })
};

export default profileReducer;