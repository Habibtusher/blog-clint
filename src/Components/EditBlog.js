import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import Sidebar from './Sidebar';
import { useHistory, useParams } from 'react-router-dom';
const EditBlog = () => {
    const history = useHistory();
    const { id } = useParams();

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`https://frozen-castle-90188.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);

    const [updateTitle, setUpdateTitle] = useState(blog.title);
    const [updateContent, setUpdateContent] = useState(blog.content);
    const [imageUrl, setImageUrl] = useState(blog.imageURL);


    const addBlog = (e) => {
        e.preventDefault();
        const updatedBlog = {
            title: updateTitle,
            content: updateContent,
            imageURL: imageUrl
        };

        fetch(`http://localhost:5000/updateBlog/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)

        }).then(res => {

            history.push("/dashboard")

        })
            .catch(err => {

            })

    }
    const handleImageUpload = (event) => {

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
    const ty = (e) => {
        console.log(e.target.value);
        setUpdateTitle(e.target.value);
    }
    const tx = (e) => {
        console.log(e.target.value);
        setUpdateContent(e.target.value);
    }
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-3 d-flex-justify-content-center">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-3">
                    <h3 className="text-center">Edit Blog</h3>

                    <Form onSubmit={addBlog}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                defaultValue={blog.title}
                                onChange={ty}
                                placeholder="Enter Title"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                type="text"
                                name="content"
                                defaultValue={blog.content}
                                onChange={tx}
                                placeholder="Enter Name"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Upload Image</Form.Label>
                            <br />
                            <Form.Control
                                type="file"
                                name="position"
                                onChange={handleImageUpload}
                            />
                        </Form.Group>
                        <Button className="action_btn" variant="primary" type="submit">
                            Update Blog
                        </Button>

                    </Form>
                </div>
            </div>
        </div>

    );
};

export default EditBlog;