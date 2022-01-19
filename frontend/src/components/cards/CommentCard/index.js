const CommentCard = () => {
    return (
        <>
            <div className="my-2 pl-5">
                <p className="text-gray-800 font-bold text-sm">By Imran Hossain</p>
                <p className="text-gray-800 text-xs underline mb-1">{new Date().toDateString()}</p>
                <p className="text-gray-600 text-sm pb-3 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

            </div>
        </>
    )
}

export default CommentCard