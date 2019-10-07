import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:
            return {...state, users: [ ...action.users ]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            };

        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (userID, isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userID, isFetching});

export const requestUsers = (requestedPage, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(requestedPage));

        let data = await userAPI.getUsers(requestedPage, pageSize);

        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
};
export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(userId, true));

    let response = await userAPI.unfollow(userId);

    if (response.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleIsFollowingProgress(userId, false));

};
export const followThunk = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(userId, true));

    let response = await userAPI.follow(userId);

    if (response.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleIsFollowingProgress(userId, false));
};


export default usersReducer;