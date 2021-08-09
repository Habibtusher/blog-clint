import React, { createContext, useState } from "react";
import Blog from './Components/Blog';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Dashboard from "./Components/Dashboard";
import Login from './Components/Login';
import ManageBlog from './Components/ManageBlog';
import PrivateRoute from './Components/PrivateRoute';
import EditBlog from './Components/EditBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/blog/:id">
            <Blog></Blog>
          </Route>
          <Route path="/editBlog/:id">
            <EditBlog></EditBlog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">

          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addNewBlog">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/manageBlog">
            <ManageBlog></ManageBlog>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
