import React from 'react';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {

    const history = useHistory();
    const addNewBlog = () => {
      history.push("/addNewBlog")
    }
    const manageBlog = () => {
      history.push("/manageBlog")
    }
    return (
        <div>
           <h3 className="mt-3">Admin Dashboard</h3>
                <button className="btn btn-outline-info mt-2 pl-2 pr-2" style={{ width: '150px', padding: "5px", marginBottom: '20px' }} onClick={addNewBlog}>Add New Blog</button>
                <br />
                <button className="btn btn-outline-info pl-2 pr-2" style={{ width: '150px', padding: "5px" }} onClick={manageBlog}> Manage Blog </button>
           
        </div>
    );
};

export default Sidebar;