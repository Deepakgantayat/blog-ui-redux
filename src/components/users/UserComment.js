import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function CommentShow (props){
    
        return(
            <div>
                    <h2>All Comments For PostId-{props.match.params.id}</h2>
                    <h3>Post Title -  {props.title.title} </h3>
                            <ul>{
                            props.comment.map(ele => {
                            return <li key = {ele.id}>{ele.name}</li>
                            })
                            }</ul>
                
                <Link to = "/posts">back</Link>
            </div>
        )
}

const mapStateToProps = (state, props) => {
    console.log(props)
    const id = props.match.params.id
    return {
        title: state.posts.find(post => post.id ===  parseInt(id)),
       post: state.posts.filter(post => post.userId === parseInt(id)),
       comment: state.comments.filter(comment => comment.postId === parseInt(id))
    }
}

export default connect(mapStateToProps)(CommentShow)