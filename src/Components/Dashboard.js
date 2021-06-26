import React from 'react';
import AddBlog from './AddBlog';
import Sidebar from './Sidebar';
const Dashboard = () => {
  return (
    <div className="container">

      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <AddBlog></AddBlog>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;