import {Routes, Route} from 'react-router-dom';
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/home";
import BlogsByTag from "./pages/tag/BlogsByTag";
import SingleBlogPageBySlug from "./pages/blog/SingleBlogPageBySlug";
import MyBlogs from "./pages/my-blogs";
import ViewMyBlogBySlug from "./pages/my-blogs/view/ViewMyBlogBySlug";
import NotFoundPage404 from "./pages/404";
import Login from "./pages/login";
import Signup from "./pages/signup";
import CreateBlog from "./pages/my-blogs/create";

const RootRouter = () => {
    return (
        <Routes>
            <Route path={''} element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path={'my-blogs'} >
                    <Route index element={<MyBlogs />} />
                    <Route path={'view/:slug'} element={<ViewMyBlogBySlug />} />
                    <Route path={'create'} element={<CreateBlog />} />
                </Route>

                <Route path={'tag/:tag'} element={<BlogsByTag />} />
                <Route path={'blog/:slug'} element={<SingleBlogPageBySlug />} />
                <Route path={'login'} element={<Login />} />
                <Route path={'signup'} element={<Signup />} />
                <Route path={'*'} element={<NotFoundPage404 />} />
            </Route>
        </Routes>
    )
}

export default RootRouter