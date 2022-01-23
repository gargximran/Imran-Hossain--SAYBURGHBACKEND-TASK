import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import postRequest from "../../../services/requests/postRequest";
import {useDispatch, useSelector} from "react-redux";
import {loginAction, authSelector} from "../../../redux/slices/authSlice";

const SignupForm = () => {

    const {isAuth } = useSelector(authSelector)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [value, setValue] = useState({fullName: '', email: '', password: ''})
    const handleChange = e => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState({})

    useEffect(() => {
        if(isAuth){
            navigate('/my-blogs')
        }
    }, [isAuth, navigate, dispatch])

    const handleSubmit = () => {
        if(loading) return;
        setLoading(true)
        setError({})
        postRequest('/api/auth/signup', value, false, {})
            .then(res => {
                setLoading(false)
                localStorage.setItem('auth-token', res.data.accessToken)
                localStorage.setItem('refresh-token', res.data.refreshToken)
                dispatch(loginAction(res.data.user))
                navigate('/my-blogs')
            })
            .catch(err => {
                setLoading(false)
                setError({...err?.errors})
            })
    }

    return (
        <div className="pt-8">
            <input value={value.fullName} type="text" placeholder={'Full Name'} name={'fullName'} onChange={handleChange} className="block w-full md:w-1/2 border-2 border-black text-lg py-1 px-2 my-2 rounded focus:outline-none font-bold mx-auto"/>
            <p className="text-xs mx-auto md:w-1/2 w-full my-1 text-red-500">{error?.fullName || ''}</p>

            <input value={value.email} onChange={handleChange} name={'email'} type="text" placeholder={'Email Address'} className="block  w-full md:w-1/2 border-2 border-black text-lg py-1 px-2 mt-8 rounded focus:outline-none font-bold mx-auto"/>

            <p className="text-xs mx-auto md:w-1/2 w-full my-1 text-red-500">{error?.email || ''}</p>

            <input value={value.password} onChange={handleChange} name={'password'} type="password" placeholder={'Password'} className="block  w-full md:w-1/2 border-2 border-black text-lg py-1 px-2 mt-8 mb-4 rounded focus:outline-none font-bold mx-auto"/>
            <p className="text-xs mx-auto md:w-1/2 w-full my-1 text-red-500">{error?.password || ''}</p>

            <div className="flex justify-center">
                <button onClick={handleSubmit} type={'button'} className="text-white w-full md:w-1/2 mt-8 bg-blue-500 py-1 px-5 rounded text-lg focus:outline-none">Signup</button>
            </div>
        </div>
    )
}

export default SignupForm