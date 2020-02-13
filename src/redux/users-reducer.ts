import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

type PhotosType = {
    small: string,
    large: string,
}

type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

export type InitialStateType = typeof initialState;

const usersReducer = (state=initialState, action: any):InitialStateType => {
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

export const follow = (userId: number):
    {
        type: typeof FOLLOW,
        userId: number
    } => ({ type: FOLLOW, userId });
export const unfollow = (userId: number):
    {
        type: typeof UNFOLLOW,
        userId: number
    } => ({ type: UNFOLLOW, userId });
export const setUsers = (users: Array<UserType>):
    {
        type: typeof SET_USERS,
        users: Array<UserType>
    } => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number):
    {
        type: typeof SET_CURRENT_PAGE,
        currentPage: number
    } => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount: number):
    {
        type: typeof SET_TOTAL_USERS_COUNT,
        totalCount: number
    } => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching: boolean):
    {
        type: typeof TOGGLE_IS_FETCHING,
        isFetching: boolean
    } => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (userID: number, isFetching: boolean):
    {
        type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
        userID: number,
        isFetching: boolean
    } => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userID, isFetching});

export const requestUsers = (requestedPage: number, pageSize: number) => async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(requestedPage));

        let data = await userAPI.getUsers(requestedPage, pageSize);

        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
};
export const unfollowThunk = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFollowingProgress(userId, true));

    let response = await userAPI.unfollow(userId);

    if (response.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleIsFollowingProgress(userId, false));

};
export const followThunk = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFollowingProgress(userId, true));

    let response = await userAPI.follow(userId);

    if (response.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleIsFollowingProgress(userId, false));
};


export default usersReducer;