import BlogThumbnailCardPrivate from "../../components/cards/BlogThumbnailCardPrivate";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import getRequest from "../../services/requests/getRequest";
import InfiniteScroll from "react-infinite-scroll-component";
import postRequest from "../../services/requests/postRequest";

const MyBlogs = () => {

    const [blogs, setBlogs] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    const refresh = () => {
        getRequest('/api/blog/get', false, {offset: 0})
            .then(({data}) => {
                setBlogs([...data.blog])
                setCount(data.count)
            })
            .catch(err => {
                setCount(blogs.length)
            })
    }

    const getData = () => {
        getRequest('/api/blog/user/get', true, {offset: blogs.length})
            .then(({data}) => {
                setBlogs([...blogs, ...data.blog])
                setCount(data.count)
            })
            .catch(err => {
                setCount(blogs.length)
            })
    }

    const deleteBlog = id => {
        postRequest('/api/blog/delete/' + id, {}, true, {})
            .then(res => {
                refresh()
            })
            .catch(err => console.log(err))
    }

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
                                <BlogThumbnailCardPrivate
                                    onDelete={(id) => deleteBlog(id)}
                                    key={blog._id}
                                    blog={blog}
                                />
                            )
                        })
                    }
                </div>
            </InfiniteScroll>



        </div>
    )
}

export default MyBlogs