import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class  UserShow extends React.Component{
    constructor(props){
        super()
        this.state={
            users:{},
            posts:[]
        }
    }

    componentDidMount() {     
        const id=this.props.match.params.id     
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const users=response.data
           
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })


        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const posts=response.data
            console.log("POst data",posts)
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })

        


    }

    render(){
        
        return(
            <div>
                
                <h2>user Name--{this.state.users.name}</h2>
                <h3>POST WRITTEN BY USERS</h3>
                {
                    <ol>
                    { this.state.posts.map(function(post){
                        return <li key={post.id}><Link to={`/posts/${post.id}`}> { post.title }</Link> </li>
                    })}
                </ol>
                }
                <Link to="/users">See All Authors</Link>

                </div>
        )
    }
}
export default UserShow