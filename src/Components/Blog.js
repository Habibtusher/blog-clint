import React, { useEffect, useState } from 'react';
import TableSpinner from './TableSpinner';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`https://frozen-castle-90188.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className="container" style={{marginTop:"70px"}}>
            {
            blog.title ?
                <div className="shadow-sm container mt-5" >
                    <h3 className="mb-5 mt-5" style={{ marginBottom: '10px' }}>{blog.title}</h3>
                    <img className="mb-5 p-3" style={{ height: '200px', borderRadius: '20px' }} src={blog.imageURL} alt="" />
                    <p style={{ textAlign: "justify" }}>{blog.content}</p>
                </div>
                : <TableSpinner/>
            }


        </div>


    );
};

export default Blog;