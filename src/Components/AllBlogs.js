import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';
import TableSpinner from './TableSpinner';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    useEffect(() => {
        fetch('https://frozen-castle-90188.herokuapp.com/allBlogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className=" p-4">
            <h2 className="text-center text-white">Blogs</h2>
            <div className="container mb-5">
                <div className="row  ">
                    {
                        blogs.length ?
                        blogs.map(blogs => <Blogs blogs={blogs}></Blogs>)
                        :
                         <TableSpinner />
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;