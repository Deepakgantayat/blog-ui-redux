import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class UserPost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount() {           
        //const id=this.props.match.params.userId
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            const posts=response.data
            console.log("POst data",posts)
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2> Listing Posts - { this.state.posts.length } </h2>
                <ul>
                    { this.state.posts.map(function(post){
                        return <li key={post.id}><Link to={`/posts/${post.id}`}> { post.title }</Link> </li>
                    })}
                </ul>
            </div> 
        )
    }
}
export default UserPost