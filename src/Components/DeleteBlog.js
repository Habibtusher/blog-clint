import React from 'react';

const DeleteBlog = ({blog}) => {
    const deleteBlog=(id)=>{
       
            fetch(`https://frozen-castle-90188.herokuapp.com/${id}`,{
             method: 'DELETE',
             
            })
            .then(res => res.json())
            .then(result => {
              
            })
    }
    
    return (
        <div className="row mt-2">
        <div className="col-md-4">
            <h4>{blog.title}</h4>
            
        </div>
        <div className="col-md-4 p-3 m-0 m-auto">
           
            <button onClick={() => deleteBlog(blog._id)} className="btn btn-primary mb-3">Delete</button>

        </div>

    </div>
    );
};

export default DeleteBlog;