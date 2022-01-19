const CommentInput = () => {
    return (
        <>
            <hr className={'mt-10'} />
            <p className="text-xl text-gray-500 font-medium my-2">Leave a comment!</p>
            <textarea className={'p-2 border-2 text-gray-600 block w-full rounded focus:outline-none'} name=""  rows="3"></textarea>
            <button className="my-2 bg-blue-600 text-white px-3 py-1 rounded shadow">Save</button>
        </>
    )
}

export default CommentInput