import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class UserPostShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:{},
            comments:[],
            user:{}
            
        }
    }
    componentDidMount() {           
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments=response.data
            this.setState({comments})
        })
        .catch((err)=>{
            console.log(err)
        })
    }    
    render() { 
        const userid=this.state.posts.userId
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then((response)=>{
            const user=response.data
            this.setState({user})
        })
        .catch((err)=>{
            console.log(err)
        })
        return (
            <div>         
                <h2>USER NAME:{this.state.user.name}</h2>
                <h3>Title: {this.state.posts.title}</h3>
                <h4>Body: <br /><br />{this.state.posts.body}</h4>
                <hr />
                <h3>Comments:</h3>
                <ol>
                {
                    this.state.comments.map((comment)=>{
                        return(
                            <li key={comment.id}>{comment.body}</li>
                        )
                    })
                }
                </ol>
                <hr />
                <Link to={`/users/${this.state.user.id}`}>More Posts Written By Same Author:{this.state.user.name}</Link>
            </div> 
        )
    }
}
export default UserPostShow