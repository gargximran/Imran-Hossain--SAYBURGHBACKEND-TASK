import axios from 'axios'

const postRequest = (url, body, auth, params) => new Promise((resolve, reject) => {
    axios.post(url, body,{
        headers: {
            'auth-token': auth ? localStorage.getItem('auth-token') || '' : ''
        },
        params: params
    })
        .then(({data}) => {
            resolve(data)
        })
        .catch(({response}) => {
            reject(response.data)
        })
})

export default postRequest