import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';
const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBlogs')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div className="bg-info p-4">
            <h2 className="text-center text-white">Blogs</h2>

            <div className="container mb-5">
                <div className="row  ">
                    {
                        blogs.map(blogs => <Blogs blogs={blogs}></Blogs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;