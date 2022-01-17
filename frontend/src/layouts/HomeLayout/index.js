import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className={'container bg-yellow-50'}>
            hello
            <Outlet />
        </div>
    )
}

export default HomeLayout