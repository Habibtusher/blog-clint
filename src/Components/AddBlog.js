import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from './Sidebar';
const AddBlog = () => {
    const { register, handleSubmit,reset } = useForm();
    const [imageUrl, setImageUrl] = useState(null);


    const onSubmit = data => {
        const products = {
            title: data.title,
            content: data.content,
            imageURL: imageUrl
        };
        const url = `https://frozen-castle-90188.herokuapp.com/addBlog`


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => {
                reset();
                console.log('server side');
               
            })
    }

    const handleImageUpload = (event) => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '3ea6925d54a056d4dcb7a26c6292821b');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (

<div className="container mt-3">
            <h3 className="text-center">Add New Blog</h3>

            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Title</label>
                <br />
                <input id="title" className="form-control" name='title' {...register("title")} />
                <br />
                <label htmlFor="content">Content</label>
                <br />
                <textarea id="content" name="content" className="form-control" {...register("content")} />
                <br />
                <label htmlFor="">Upload Image</label>
                <br />
                <input id="img" className="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <br />
                <input className='btn btn-outline-info form-control' type="submit" />
            </form>
        </div>


        
    );
};

export default AddBlog;