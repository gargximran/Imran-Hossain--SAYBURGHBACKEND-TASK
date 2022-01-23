import {Link} from "react-router-dom";
import BlogTagBadge from "../../Badge/BlogTagBadge";

const BlogThumbnailCardPublic = ({blog}) => {
    return (
        <div className={'py-2 px-4 transition-all duration-100 hover:shadow-lg border-t shadow rounded bg-yellow-100'}>
            <Link to={'/blog/' + blog.slug} className={'text-blue-500 pb-3 block hover:underline md:text-lg font-bold'}>{blog.title.substr(0, 25)} {blog.title.length > 25 ? '...' : ''}</Link>
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
        </div>
    )
}

export default BlogThumbnailCardPublic
