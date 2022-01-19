import {WithContext as TagInput} from 'react-tag-input'
import {useState} from "react";

const CreateNewBlogForm = () => {
    const [tags, setTags] = useState([])
    const handleAddition = (tag) => {
        setTags([...tags, tag])
    }

    const handleDelete = (tag) => {
        const newTags = [...tags]
        newTags.splice(tag, 1)
        setTags([...newTags])
    }


    const handleDrag = (tag, currPos, newPos) => {
        let newTags = [...tags]
        newTags.splice(currPos, 1)
        newTags.splice(newPos, 0, tag)
        setTags([...newTags])
    }

    return (
        <div className="pt-8">
            <input type="text" placeholder={'Title'} className="block w-full border-2 border-black text-lg py-1 px-2 my-2 rounded focus:outline-none font-bold mx-auto"/>

            <textarea type="text" rows={10} placeholder={'Write blog here'} className="block w-full  border-2 border-black text-lg py-1 px-2 mt-8 rounded focus:outline-none mx-auto"/>


            <TagInput
                tags={tags}
                handleAddition={handleAddition}
                delimiters={[11, 13, 118]}
                handleDelete={handleDelete}
                handleDrag={handleDrag}
            />

            <div className="flex justify-center">
                <button className="text-white w-full mt-8 bg-blue-500 py-1 px-5 rounded text-lg focus:outline-none">Create</button>
            </div>
        </div>
    )
}


export default CreateNewBlogForm