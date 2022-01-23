import EditBlogForm from "../../../components/Forms/EditBlogForm";

const Editblog = () => {
    return (
        <div className="py-5 ">
            <h2 className={'text-center text-lg md:text-2xl font-bold text-gray-700 underline'}>Edit Blog</h2>
            <EditBlogForm />
        </div>
    )
}

export default Editblog