import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import HomeComponent from './Home'
import About from './About'

import UserList from './components/users/UserList'
import UserShow from './components/users/UserShow'
import UserPosts from './components/users/UserPosts'
import CommentShow from './components/users/UserComment'

function App() {
  return (
    <BrowserRouter>
    <div>      
         <li><Link to="/">Home</Link></li>
        <li><Link to="/about" target= 'blank'>About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li> 
        <li><Link to = "/posts">Posts</Link></li>
      
      <Route path="/" component={HomeComponent} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/users" component={UserList} exact={true}/>
      <Route path = "/posts" component = {UserPosts} exact = {true}/>
      <Route path = "/posts/:id" component = {CommentShow}/>
      <Route path="/users/:id" component={UserShow}/> 
    </div>
    </BrowserRouter>
    
  );
}

export default App;
