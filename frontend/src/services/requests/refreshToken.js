import axios from 'axios'

const refreshToken = () => new Promise((resolve, reject) => {
    if(!localStorage.getItem('refresh-token')) reject('not token live!')

    axios.post('/api/auth/refresh', {},{
        headers: {
            'refresh-token': localStorage.getItem('refresh-token')
        }
    })
        .then(({data}) => {
            localStorage.setItem('auth-token', data?.data?.accessToken)
            resolve(data)
        })
        .catch(({response}) => {
            if(response?.data?.status_code === 401){
                localStorage.removeItem('auth-token')
                localStorage.removeItem('refresh-token')
            }
            reject(response.data)
        })
})

export default refreshToken