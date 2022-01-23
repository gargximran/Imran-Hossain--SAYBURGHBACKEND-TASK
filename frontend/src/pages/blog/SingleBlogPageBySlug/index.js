import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BlogTagBadge from "../../../components/Badge/BlogTagBadge";
import CommentInput from "../../../components/Forms/CommentInput";
import CommentCard from "../../../components/cards/CommentCard";
import getRequest from "../../../services/requests/getRequest";

const SingleBlogPageBySlug = () => {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        getRequest('/api/blog/single/' + slug, false, {})
            .then(res => {
                setBlog(res.data.blog)
            })
            .then(err => console.log(err))
    }, [slug])

    const commented = () => {
        getRequest('/api/blog/single/' + slug, false, {})
            .then(res => {
                setBlog(res.data.blog)
            })
            .then(err => console.log(err))
    }

    const deleteComment = id => {
        getRequest('/api/blog/comment/' + slug + '/' + id, true, {})
            .then(res => {
                getRequest('/api/blog/single/' + slug, false, {})
                    .then(res => {
                        setBlog(res.data.blog)
                    })
                    .then(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={'py-2 my-5 px-4'}>
            <h2 className={'text-blue-500 pb-3 block hover:underline md:text-lg font-bold'}>{blog?.title || ''}</h2>
            <div className="flex gap-1 flex-wrap">
                {
                    blog?.tags?.length > 0 && blog.tags.map(tag => {
                        return <BlogTagBadge
                            key={tag._id}
                            name={tag.name}
                            slug={tag.slug}
                        />
                    })
                }
            </div>

            <div className="my-2 whitespace-pre-line pt-10">

                    {
                        blog?.body || ''
                    }

            </div>

            <hr className="mt-10"/>
            <h2 className="text-lg text-gray-800 mt-2">Comments</h2>
            {
                blog?.comments?.length > 0 && blog.comments.map((comment, index) => <CommentCard author={blog.author._id} index={index} key={comment.comment} data={comment} deleteComment={deleteComment} />)
            }
            <CommentInput slug={slug} commented={commented} />


        </div>
    )
}

export default SingleBlogPageBySlug