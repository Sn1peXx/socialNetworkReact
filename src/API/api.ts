import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e364812a-0346-40fb-a621-19ef765a14e6"
    }
})

export const userAPI = {

    getUsers(currentPage: number) {
        return instance.get(`users?page=${currentPage}&count=10`)
            .then(res => {
                return res.data
            })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
    }
}



export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },

    authUser(email: string, password: string, terms: boolean, captcha = null) {
        return instance.post(`auth/login`, { email, password, terms, captcha });
    },
    authLogout() {
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-type' : 'multipart/form-data'
            }
        });
    },
    setUserData(userId: number, aboutMe: string, fullName: string, lookingForAJobDescription: string) {
        return instance.put(`profile`, {userId, aboutMe, fullName, lookingForAJobDescription});
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        console.log('сработало')
        return instance.get(`security/get-captcha-url`);
    }
}