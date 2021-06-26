import React, { useEffect, useState } from 'react';
import DeleteBlog from './DeleteBlog';
import Sidebar from './Sidebar';
const ManageBlog = () => {
const [loadALLBlog,setLoadAllBlog] = useState([]);
 useEffect(()=>{
    fetch('http://localhost:5000/allBlogs')
    .then(res => res.json())
    .then(data => setLoadAllBlog(data))
 },[])
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-3 mt-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 mt-3">
            <h3 className="text-center">Manage Products</h3>
            <div className="row mt-5">
                <div className="col-md-6">
                <h4 className="mb-3">Title</h4>
                </div>
                <div className="col-md-6"> 
                <h4> Action</h4>
                </div>
              </div>
           
            
           {
               loadALLBlog.map(blog => <DeleteBlog blog={blog}></DeleteBlog>)
           }

            </div>
        </div>
        </div>
    );
};

export default ManageBlog;