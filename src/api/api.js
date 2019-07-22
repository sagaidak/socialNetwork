import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e4c0e848-591a-40df-a660-b8855433ec28"
    }
});


export const userAPI = {
    getUsers(currentPage=1, pageSize=5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(user_id=2) {
        return instance
            .post(`follow/${user_id}`)
            .then(response => response.data);
    },
    unfollow(user_id=2) {
        return instance
            .delete(`follow/${user_id}`)
            .then(response => response.data);
    },
    getUserProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getUserProfile(userId);
    }
};

export const profileAPI = {
    getUserProfile(userId=2) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    getUserStatus(userId=2) {
        return instance
            .get('profile/status/' + userId)
            .then(res => res.data);
    },
    updateUserStatus(status) {
        return instance
            .put('profile/status/', {status})
            .then(res => res.data);
    }
};

export const authAPI = {
    authMe() {
        return instance
            .get('auth/me')
            .then(response => response.data);
    },
};


