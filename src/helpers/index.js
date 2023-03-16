import axios from 'axios'

export const env = (key, defaultValue) => import.meta.env['VITE_' + key] || defaultValue

const serverUrl = env('SERVER_URL')
export const Api = {
    get(route, config) {
        const user = JSON.parse(localStorage.getItem("user"))
        const token = user.token
        if (token) {
            if (!config)
                config = {}
            if (!config.headers)
                config.headers = {}
    
            config.headers.Authorization = `Bearer ${token}`
        }

        return axios.get(serverUrl + route, config)
        // return axios.get(serverUrl + route, {params}, config)
    },
    
    post(route, data, config) {
       
        return axios.post(serverUrl + route, data, config)
    },

    put(route, data, config) {
        const user = JSON.parse(localStorage.getItem("user"))
        const token = user.token
        if (token) {
            if (!config)
                config = {}
            if (!config.headers)
                config.headers = {}
    
            config.headers.Authorization = `Bearer ${token}`
        }
        return axios.put(serverUrl + route, data, config)
    }
}
