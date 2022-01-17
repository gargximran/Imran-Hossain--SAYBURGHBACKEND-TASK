import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className={'container bg-yellow-50'}>
            Dashboard
            <Outlet />
        </div>
    )
}

export default DashboardLayout