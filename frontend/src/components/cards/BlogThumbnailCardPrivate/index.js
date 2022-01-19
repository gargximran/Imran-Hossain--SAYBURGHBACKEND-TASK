import {Link} from "react-router-dom";
import BlogTagBadge from "../../Badge/BlogTagBadge";

const BlogThumbnailCardPrivate = () => {
    return (
        <div className={'py-2 px-4 transition-all duration-100 hover:shadow-lg border-t shadow rounded bg-yellow-100'}>
            <Link to={'/my-blogs/view/lsdkfjsdlf'} className={'text-blue-500 pb-3 block hover:underline md:text-lg font-bold'}>I am blog title and I am very big to</Link>
            <div className="flex gap-1 flex-wrap">

                <BlogTagBadge />
                <BlogTagBadge />
            </div>

            <div className="my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of  <Link to={'/my-blogs/view/lsdkfjsdlf'} className={'text-blue-500 underline pl-1'}>Read More</Link>
            </div>
            <div className="my-2 flex justify-end gap-2">
                <Link className="text-sm font-bold rounded text-white py-1 px-3 bg-yellow-600 shadow hover:shadow-lg transition-all duration-100" to={'/my-blogs/edit/sdlfkjsdf'}>Edit</Link>

                <button className={'text-sm font-bold rounded text-white py-1 px-3 bg-red-600 shadow hover:shadow-lg transition-all duration-100'}>Delete</button>

            </div>
        </div>
    )
}

export default BlogThumbnailCardPrivate