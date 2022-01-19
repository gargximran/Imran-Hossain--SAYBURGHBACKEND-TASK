import {Link} from "react-router-dom";
import SignupForm from "../../components/Forms/SignupForm";

const Signup = () => {
    return (
        <div className="py-5 mt-10 ">
            <h2 className={'text-center text-lg md:text-2xl font-bold text-gray-700 underline'}>Signup</h2>
            <p className="text-center text-xs">Already have account! <Link to={'/login'} className="text-blue-500 hover:underline">Login here.</Link></p>
            <SignupForm />
        </div>
    )
}


export default Signup