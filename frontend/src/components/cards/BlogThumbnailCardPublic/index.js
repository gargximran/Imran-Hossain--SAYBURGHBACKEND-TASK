import {Link} from "react-router-dom";
import BlogTagBadge from "../../Badge/BlogTagBadge";

const BlogThumbnailCardPublic = () => {
    return (
        <div className={'py-2 px-4 transition-all duration-100 hover:shadow-lg border-t shadow rounded bg-yellow-100'}>
            <Link to={'/blog/sdlkfjsdfl'} className={'text-blue-500 pb-3 block hover:underline md:text-lg font-bold'}>I am blog title and I am very big to</Link>
            <div className="flex gap-1 flex-wrap">

                <BlogTagBadge />
                <BlogTagBadge />
            </div>

            <div className="my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of  <Link to={'/blog/lsdkfjsdlf'} className={'text-blue-500 underline pl-1'}>Read More</Link>
            </div>
        </div>
    )
}

export default BlogThumbnailCardPublic
