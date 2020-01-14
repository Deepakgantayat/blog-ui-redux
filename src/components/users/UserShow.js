import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function UserShow (props){    
        return(
            <div>
    
                <h2>User Show Page </h2>
                {
                    props.user && (
                        <div>
                            <p>{props.user.name} - {props.user.email}</p>
                            <h2>All posts</h2>
                            <ul>{
                            props.post.map(ele => {
                            return <li key = {ele.id}><Link to = {`/posts/${ele.id}`} >{ele.title}</Link></li>
                            })
                            }</ul>
                        </div>
                    )
                }
                
                <Link to = "/users">back</Link>
            </div>
        )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: state.users.find(user => user.id ===  parseInt(id)),//parse int bcz the id is an string || pass ==
       post: state.posts.filter(post => post.userId === parseInt(id))
    }
}

export default connect(mapStateToProps)(UserShow)