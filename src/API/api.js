import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e364812a-0346-40fb-a621-19ef765a14e6"
    }
})

export const userAPI = {

    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}&count=10`)
            .then(res => {
                return res.data
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}