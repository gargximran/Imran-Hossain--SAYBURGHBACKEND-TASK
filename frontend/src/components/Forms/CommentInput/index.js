import {useState} from "react";
import postRequest from "../../../services/requests/postRequest";

const CommentInput = ({slug, commented}) => {
    const [comment, setComment] = useState('')
    const [loading, setLoading] = useState(false)

    const submit = () => {
        if(loading) return;
        if(!comment) return;
        setLoading(true)
        postRequest('/api/blog/comment/' + slug, {comment: comment}, true, {})
            .then(res => {
                setLoading(false)
                setComment('')
                commented()
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }
    return (
        <>
            <hr className={'mt-10'} />
            <p className="text-xl text-gray-500 font-medium my-2">Leave a comment!</p>
            <textarea onChange={e => setComment(e.target.value)} value={comment} className={'p-2 border-2 text-gray-600 block w-full rounded focus:outline-none'} name=""  rows="3"></textarea>
            <button onClick={submit} className="my-2 bg-blue-600 text-white px-3 py-1 rounded shadow">Save</button>
        </>
    )
}

export default CommentInput