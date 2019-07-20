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
    authMe() {
        return instance
            .get('auth/me', {
                withCredentials: true
            })
            .then(response => response.data);
    },
    getUserProfile(userId) {
        return instance
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data);
    }
};


