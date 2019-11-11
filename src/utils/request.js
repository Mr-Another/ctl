import axios from 'axios'


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

//request interceptor
service.interceptors.request.use(
    config => {
        if(store.getters.token){
            config.headers['X-Token'] = ''
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

//response interceptor
service.interceptors.response.use(
    response =>{
        const res = response.data
        if(res.data){
            console.log(res)
        }else{
            return res
        }
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service
