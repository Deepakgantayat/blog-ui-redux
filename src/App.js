import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

// import Home from './components/blogger/Home'
// import UserList from './components/blogger/Users'
// import UserPost from './components/blogger/AllPost'
// import UserShow from './components/blogger/UserPost'
// import UserPostShow from './components/blogger/CommentByUser'
// import PostByUserShow from './components/blogger/UserByComment'
import HomeComponent from './Home'
import About from './About'
import ProductList from './ProductList'
import UserList from './components/users/UserList'
import UserShow from './components/users/UserShow'
import UserPosts from './components/users/UserPosts'
import CommentShow from './components/users/UserComment'

function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <h2>Hello React -CRA</h2> */}
      
         <li><Link to="/">Home</Link></li>
        <li><Link to="/about" target= 'blank'>About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li> 
        <li><Link to = "/posts">Posts</Link></li>
        {/* <Link to="/">/Home</Link>
        <Link to ="/users">/Users</Link>
        <Link to="/posts">/Posts</Link>
     
        <Route path="/" component = {Home} exact = {true}/>
        <Route path="/users" component = {UserList} exact = {true}/>
        <Route path="/users/:id" component={UserShow}/>
        <Route path="/posts" component={UserPost} exact={true}/>
        <Route path="/posts/:id" component={UserPostShow}/>
        <Route path="/comments/:id" component={PostByUserShow}/> */}
        {/* <Route path="/" component = {UserList} exact = {true}/>
        <Route path="/" component = {UserList} exact = {true}/>
        <Route path="/" component = {UserList} exact = {true}/>
        <Route path="/" component = {UserList} exact = {true}/>  */}
      
      <Route path="/" component={HomeComponent} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/products" component={ProductList}/>
      <Route path="/users" component={UserList} exact={true}/>
      <Route path = "/posts" component = {UserPosts} exact = {true}/>
      <Route path = "/posts/:id" component = {CommentShow}/>
      <Route path="/users/:id" component={UserShow}/> 
    </div>
    </BrowserRouter>
    
  );
}

export default App;
