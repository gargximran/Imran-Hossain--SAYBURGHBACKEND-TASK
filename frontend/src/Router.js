import {Routes, Route} from 'react-router-dom';
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/home";
import DashboardLayout from "./layouts/DashboardLayout";

const RootRouter = () => {
    return (
        <Routes>
            <Route path={''} element={<HomeLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path={'dashboard'} element={<DashboardLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default RootRouter