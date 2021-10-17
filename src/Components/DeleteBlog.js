import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DeleteBlog = ({ blog }) => {

    const history = useHistory();

    const deleteBlog = (id) => {

       
            fetch(`https://frozen-castle-90188.herokuapp.com/deleteBlog/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(result => {
    
                })
        }
        
    

    const editBlog = (id) => {
        history.push(`/editBlog/${id}`);
    }

    return (
        <div className="row mt-2">
            <div className="col-md-4">
                <h4>{blog.title}</h4>

            </div>
            <div className="row col-md-5 p-3 m-0 m-auto">
                <div className="col-md-3">     
                <button onClick={() => editBlog(blog._id)} className="btn btn-primary mb-3">Edit</button></div>
                <div className="col-md-3"> <button onClick={() => deleteBlog(blog._id)} className="btn btn-primary mb-3">Delete</button></div>
            </div>

        </div>
    );
};

export default DeleteBlog;