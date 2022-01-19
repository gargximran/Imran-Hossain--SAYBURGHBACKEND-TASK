import BlogThumbnailCardPublic from "../../../components/cards/BlogThumbnailCardPublic";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'

const BlogsByTag = () => {
    const {tag} = useParams()
    useEffect(() => {
        console.log(tag)
    }, [tag])

    return (
        <div className={'py-4 md:px-2 gap-4 grid grid-cols-1'}>
            <div className="my-10">
                <h2 className="text-gray-700 font-bold text-lg md:text-xl">
                    Showing blog related <span className="text-red-500">"hello"</span> tag
                </h2>
            </div>
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
            <BlogThumbnailCardPublic />
        </div>
    )
}


export default BlogsByTag