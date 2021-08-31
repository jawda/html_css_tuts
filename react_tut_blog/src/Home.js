import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    // fetch data 
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');


    return (  
        
        <div className="home">
            {error && <div>{error} </div>}
            {isPending && <div>Loading...</div>}


            {/* pass in the props into the blog list  */}
            {/* logical & evaluates first and then only if not null does it do the rest  */}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
           
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p> */}
            {/* play with filters  */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}

            {/* <p>{ name } is { age } old</p> */}

            {/* <button onClick={handleClick}>Click me</button> */}
            {/* passing variables you need to wrap in an annonymous function  */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me</button> */}
        </div>
    );
}
 
export default Home;