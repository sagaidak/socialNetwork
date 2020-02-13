import {profileAPI} from "../api/api";
import {PostType, ProfileType} from "../Types/Types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id: 1, post: "Hi, how are you?", likes: 5},
        {id: 2, post: "Lost in the oblivion", likes: 10},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};


export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: action.post,
                likes: 0,
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

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST,
    post: string
}

export const addPostActionCreator = (post: string):AddPostActionCreatorActionType => ({type: ADD_POST, post});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId=2) => async (dispatch: any) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
};

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}

export const setUserStatus = (status: string):SetUserStatusActionType => ({type: SET_USER_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}

export const deletePost = (postId: number):DeletePostActionType => ({type: DELETE_POST, postId});

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let res = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(res));
};
export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let res = await profileAPI.updateUserStatus(status);

    if (res.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;