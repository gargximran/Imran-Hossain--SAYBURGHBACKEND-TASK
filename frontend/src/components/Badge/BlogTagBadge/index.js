import {Link} from "react-router-dom";

const BlogTagBadge = ({name, slug}) => {
    return (
        <Link to={'/tag/' + slug} className="inline-block rounded text-xs px-1 text-white bg-black">{name}</Link>
    )
}


export default BlogTagBadge