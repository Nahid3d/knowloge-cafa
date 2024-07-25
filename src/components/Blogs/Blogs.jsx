
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAdd}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h4 className="text-3xl">Blogs : {blogs.length}</h4>
            {
                blogs.map(blog => <Blog handleAdd={handleAdd} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;