import { useSelector} from "react-redux";
import { authSelector } from "../../../redux/slices/authSlice";

const CommentCard = ({data,index, deleteComment, author}) => {

    const {user} = useSelector(authSelector)


    return (
        <>
            <div className="my-2 pl-5">
                <p className="text-gray-800 font-bold text-sm">By {data.commenter.fullName}</p>
                <p className="text-gray-800 text-xs underline mb-1">{new Date(data.createdAt).toDateString()}</p>
                <p className="text-gray-600 text-sm pb-3 ">{data.comment}</p>
                {
                    user?._id === author && (
                        <button onClick={() => deleteComment(index)} className={'text-sm font-bold rounded text-white py-1 px-3 bg-red-600 shadow hover:shadow-lg transition-all duration-100'}>Delete</button>
                    )
                }



            </div>
        </>
    )
}

export default CommentCard