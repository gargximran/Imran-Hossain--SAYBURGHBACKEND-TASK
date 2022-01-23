import LoginForm from "../../components/Forms/LoginForm";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="py-5 mt-10 ">
            <h2 className={'text-center text-lg md:text-2xl font-bold text-gray-700 underline'}>Login</h2>
            <p className="text-center text-xs">Don't you have any account! <Link to={'/signup'} className="text-blue-500 hover:underline">Signup here.</Link></p>
            <LoginForm />
        </div>
    )
}

export default Login