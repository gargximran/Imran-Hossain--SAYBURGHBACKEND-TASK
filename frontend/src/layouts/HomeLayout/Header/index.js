import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'bg-yellow-500 shadow'}>
            <div className="container flex justify-between py-2 md:py-4">
                <Link to={'/'} className="inline-block font-bold text-gray-800 text-lg md:text-2xl cursor-pointer">BLOG</Link>

                <div className="inline-block">
                    <ul className="flex gap-2 md:gap-4">
                        <li>
                            <Link to={'/login'} className="py-2 px-3 text-white text-sm md:text-base md:font-medium font-white bg-gray-600 rounded shadow">
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link to={'/my-blogs'} className="py-2 px-3 hover:underline text-white text-sm md:text-base md:font-medium">
                                My Blogs
                            </Link>
                        </li>

                        <li>
                            <Link to={'/logout'} className="py-2 px-3 text-white text-sm md:text-base md:font-medium bg-red-600 rounded shadow">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Header