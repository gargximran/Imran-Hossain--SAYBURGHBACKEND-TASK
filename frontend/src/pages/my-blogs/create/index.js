import CreateNewBlogForm from "../../../components/Forms/CreateNewBlogForm";

const CreateBlog = () => {
    return (
        <div className="py-5 ">
            <h2 className={'text-center text-lg md:text-2xl font-bold text-gray-700 underline'}>Create New Blog</h2>
            <CreateNewBlogForm />
        </div>
    )
}

export default CreateBlog