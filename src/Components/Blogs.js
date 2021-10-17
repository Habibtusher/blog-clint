import React from 'react';
import { useHistory } from "react-router-dom";
import './Blogs.css'
const Blogs = ({ blogs }) => {
    const history = useHistory();
    const handleBuy = (id) => {
        history.push(`/blog/${id}`);
    }
    return (
        <div className="col-md-4 col-sm-12 g-5" onClick={() => handleBuy(blogs._id)}>
            <div id="cardStyle" className="card shadow mx-auto" style={{ width: "18rem" }}>
                <div className="">
                    <img style={{ height: '250px' }} src={blogs.imageURL} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <h5 style={{ height: '45px' }} className="text-center">{blogs.title}</h5>
                </div>
            </div>
        </div>

    );
};

export default Blogs;