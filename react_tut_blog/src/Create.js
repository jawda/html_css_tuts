import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    // make some states to track items 
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        // keep the page from reloading like it normally would default to doing  
        e.preventDefault();
        const blog = { title, body, author};// create a new blog object
        
        setIsPending(true);
        // send the info to the server 
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            // console.log('new blog added');
            setIsPending(false);//update our pending button
            
            // history.go(-1);//go back one screen
            history.push('/'); //go to home page
        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title: </label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                 <label> Blog body: </label>
               <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
               ></textarea>

               <label> Blog author: </label>
               <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
               >
                   <option value="mario">mario</option>
                   <option value="yoshi">yoshi</option>
               </select>
               { !isPending && <button>Add Blog</button>}
               
               { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;