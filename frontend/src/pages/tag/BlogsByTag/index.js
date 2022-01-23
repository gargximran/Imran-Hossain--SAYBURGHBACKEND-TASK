import BlogThumbnailCardPublic from "../../../components/cards/BlogThumbnailCardPublic";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import getRequest from "../../../services/requests/getRequest";

const BlogsByTag = () => {
    const {tag} = useParams()

    const [blogs, setBlogs] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        refresh()
        // eslint-disable-next-line
    }, [tag])

    const refresh = () => {
        getRequest('/api/blog/get', false, {offset: 0, tag: tag})
            .then(({data}) => {
                setBlogs([...data.blog])
                setCount(data.count)
            })
            .catch(err => {
                setCount(blogs.length)
            })
    }

    const getData = () => {
        getRequest('/api/blog/get', false, {offset: blogs.length, tag: tag})
            .then(({data}) => {
                setBlogs([...blogs, ...data.blog])
                setCount(data.count)
            })
            .catch(err => {
                setCount(blogs.length)
            })
    }

    return (
        <>

            <InfiniteScroll
                dataLength={blogs.length}
                next={getData}
                hasMore={blogs.length !== count}
                endMessage={
                    <p className={'py-10 font-bold'} style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                refreshFunction={refresh}
                pullDownToRefresh
                className={'hello'}
                loader={<div className="loader text-center my-10 font-bold" key={0}>Getting Blogs ...</div>}
            >
                <div className={'py-4 md:px-2 gap-4 grid grid-cols-1'}>
                    {
                        blogs.map((blog) => {
                            return (
                                <BlogThumbnailCardPublic
                                    key={blog._id}
                                    blog={blog}
                                />
                            )
                        })
                    }
                </div>
            </InfiniteScroll>
        </>
    )
}


export default BlogsByTag