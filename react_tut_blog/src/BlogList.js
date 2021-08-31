import { Link } from "react-router-dom";
// take in the props from Home or whereever 
const BlogList = ({blogs, title, handleDelete}) => {


    return (  
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* pass the id in the link to the details page */}
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                    </Link>
                   
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;