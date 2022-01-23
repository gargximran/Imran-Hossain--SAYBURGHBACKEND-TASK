import axios from 'axios'
const getRequest = (url, auth, params) => new Promise((resolve, reject) => {
    axios.get(url, {
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

export default getRequest