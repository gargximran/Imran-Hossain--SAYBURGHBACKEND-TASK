const SignupForm = () => {
    return (
        <div className="pt-8">
            <input focus type="text" placeholder={'Full Name'} className="block w-full md:w-1/2 border-2 border-black text-lg py-1 px-2 my-2 rounded focus:outline-none font-bold mx-auto"/>

            <input focus type="text" placeholder={'Email Address'} className="block  w-full md:w-1/2 border-2 border-black text-lg py-1 px-2 mt-8 rounded focus:outline-none font-bold mx-auto"/>

            <input focus type="password" placeholder={'Password'} className="block  w-full md:w-1/2 border-2 border-black text-lg py-1 px-2 mt-8 mb-4 rounded focus:outline-none font-bold mx-auto"/>

            <input focus type="password" placeholder={'Confirm Password'} className="block  w-full md:w-1/2 border-2 border-black text-lg py-1 px-2 mt-8 mb-4 rounded focus:outline-none font-bold mx-auto"/>
            <div className="flex justify-center">
                <button className="text-white w-full md:w-1/2 mt-8 bg-blue-500 py-1 px-5 rounded text-lg focus:outline-none">Signup</button>
            </div>
        </div>
    )
}

export default SignupForm