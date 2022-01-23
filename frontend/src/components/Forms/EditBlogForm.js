import {WithContext as TagInput} from 'react-tag-input'
import {useState, useEffect} from "react";
import postRequest from "../../services/requests/postRequest";
import getRequest from "../../services/requests/getRequest";
import {useNavigate, useParams} from "react-router-dom";

const EditBlogForm = () => {
    const {slug} = useParams()

    const navigate = useNavigate()
    const [tags, setTags] = useState([])
    const handleAddition = (tag) => {
        setTags([...tags, tag])
    }
    const [tagSuggestion, setTagSuggestion] = useState([])
    const [value, setValue] = useState({title: '', body: ''})

    useEffect(() => {
        getRequest('/api/blog/single/' + slug, false, {})
            .then(res => {
                const tags = res.data.blog.tags.map(tag => ({id: tag.name, text: tag.name}))
                setTags(tags)
                setValue({title: res.data.blog.title, body: res.data.blog.body})
            })
            .catch(err => console.log(err))

        getRequest('/api/tag/get', true)
            .then(res => {
                const suggestion = res.data.map(({name}) => ({id: name, text: name}))
                setTagSuggestion(suggestion)
            })
            .catch(err => console.log(err))
    }, [])


    const handleChange = e => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState({})

    const handleDelete = (tag) => {
        const newTags = [...tags]
        newTags.splice(tag, 1)
        setTags([...newTags])
    }

    const handleSubmit = () => {
        if(loading) return;
        const mappedText = tags.map(({text}) => text)
        setLoading(true)
        setError({})
        postRequest('/api/blog/update/' + slug, {...value, tags: mappedText}, true, {})
            .then(res => {
                setLoading(false)
                navigate('/my-blogs')
            })
            .catch(err => {
                setLoading(false)
                setError({...err?.errors})
            })
    }


    const handleDrag = (tag, currPos, newPos) => {
        let newTags = [...tags]
        newTags.splice(currPos, 1)
        newTags.splice(newPos, 0, tag)
        setTags([...newTags])
    }

    return (
        <div className="pt-8">
            <input name={'title'} onChange={handleChange} value={value.title} type="text" placeholder={'Title'} className="block w-full border-2 border-black text-lg py-1 px-2 my-2 rounded focus:outline-none font-bold mx-auto"/>
            <p className="text-xs my-1 text-red-500">{error?.title || ''}</p>

            <textarea value={value.body} name={'body'} onChange={handleChange} type="text" rows={10} placeholder={'Write blog here'} className="block w-full  border-2 border-black text-lg py-1 px-2 mt-8 rounded focus:outline-none mx-auto"/>
            <p className="text-xs my-1 text-red-500">{error?.body || ''}</p>


            <TagInput
                suggestions={tagSuggestion}
                tags={tags}
                handleAddition={handleAddition}
                delimiters={[11, 13, 118]}
                handleDelete={handleDelete}
                handleDrag={handleDrag}
            />
            <p className="text-xs my-1 text-red-500">{error?.tags || ''}</p>

            <div className="flex justify-center">
                <button type={'button'} onClick={handleSubmit} className="text-white w-full mt-8 bg-blue-500 py-1 px-5 rounded text-lg focus:outline-none">Update</button>
            </div>
        </div>
    )
}


export default EditBlogForm