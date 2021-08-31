import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    
    const { id } = useParams();// this allows us to grab params from the url 
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);// pass in id to our custom  hook 
    const history = useHistory();

    //delete function
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            //after delete redirect to home page
            history.push('/');
        })
    }


    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;