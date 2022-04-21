import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'https://iproject-4k.herokuapp.com/'
export const useUserStore = defineStore({
    id: 'user',
    state: (
        isLogin = localStorage.getItem('access_token')
    ) => ({

    }),
    getters: {

    },
    actions: {
        loginAction(userData) {
            return axios.post(baseUrl + 'users/login', userData, {})
        },
        registerAction(userData) {
            return axios.post(baseUrl + 'users/register', userData, {})
        }
    }
})