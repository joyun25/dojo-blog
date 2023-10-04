import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum ...', author: 'mario', id: 1 },
        { title: 'Welcome Party!', body: 'lorem ipsum ...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum ...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    // only the first rendering triggers it
    // useEffect(() => {
    //     console.log("use effect ran");
    //     console.log(blogs);
    // }, []);

    // only trigger when the first rendering and the variable mario changes
    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(blog => blog.author === "mario")} title="Mario's Blogs"/>
            <br />
            <button onClick={() => setName("luigi")}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;