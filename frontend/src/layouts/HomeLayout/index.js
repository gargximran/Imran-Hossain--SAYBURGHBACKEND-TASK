import { Outlet} from 'react-router-dom'
import Header from "./Header";

const HomeLayout = () => {
    return (
        <div className={'bg-yellow-50'}>
            <Header />
            <div className="container min-h-mobileBody md:min-h-desktopBody">
                <Outlet />
            </div>

            <footer className="py-10 bg-yellow-500 border-t">
                <div className="container text-center">
                    Footer Text
                </div>
            </footer>
        </div>
    )
}

export default HomeLayout