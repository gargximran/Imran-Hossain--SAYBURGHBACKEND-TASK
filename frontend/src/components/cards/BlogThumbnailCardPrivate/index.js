import {Link} from "react-router-dom";
import BlogTagBadge from "../../Badge/BlogTagBadge";

const BlogThumbnailCardPrivate = ({blog, onDelete}) => {
    return (
        <div className={'py-2 px-4 transition-all duration-100 hover:shadow-lg border-t shadow rounded bg-yellow-100'}>
            <Link to={'/blog/' + blog.slug} className={'text-blue-500 pb-3 block hover:underline md:text-lg font-bold'}>{blog.title.substr(0, 50)} {blog.title.length > 50? '...' : ''}</Link>
            <div className="flex gap-1 flex-wrap">
                {
                    blog.tags.map(tag => {
                        return <BlogTagBadge
                            key={tag._id}
                            name={tag.name}
                            slug={tag.slug}
                        />
                    })
                }
            </div>

            <div className="my-2">
                {
                    blog.body.substr(0, 350)
                } {blog.body.length > 350 ? '...' : ''}  <Link to={'/blog/' + blog.slug} className={'text-blue-500 underline pl-1'}>Read More</Link>
            </div>
            <div className="my-2 flex justify-end gap-2">
                <Link className="text-sm font-bold rounded text-white py-1 px-3 bg-yellow-600 shadow hover:shadow-lg transition-all duration-100" to={'/my-blogs/edit/' + blog.slug}>Edit</Link>

                <button onClick={() => onDelete(blog._id)} className={'text-sm font-bold rounded text-white py-1 px-3 bg-red-600 shadow hover:shadow-lg transition-all duration-100'}>Delete</button>

            </div>
        </div>
    )
}

export default BlogThumbnailCardPrivate