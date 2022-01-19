import BlogThumbnailCardPrivate from "../../components/cards/BlogThumbnailCardPrivate";
import {Link} from "react-router-dom";

const MyBlogs = () => {
    return (
        <div className={'py-4 md:px-2 gap-4 grid grid-cols-1'}>
            <div className="my-10">
                <div className="flex justify-between">
                    <h2 className="text-gray-700 inline font-bold text-lg md:text-xl">
                        My Blogs
                    </h2>

                    <Link className="text-white px-4 py-1 font-bold rounded bg-blue-500" to={'/my-blogs/create'}>New Blog</Link>
                </div>

            </div>
            <BlogThumbnailCardPrivate />
            <BlogThumbnailCardPrivate />
            <BlogThumbnailCardPrivate />
            <BlogThumbnailCardPrivate />
            <BlogThumbnailCardPrivate />
        </div>
    )
}

export default MyBlogs