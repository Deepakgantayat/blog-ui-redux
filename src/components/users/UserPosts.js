import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Col,Row} from 'reactstrap'
import {Card , CardImg, CardBody, CardTitle} from 'reactstrap'


function UserPosts(props){
    
        return(
            <div>
                <br/>
                <h2 className="text-light bg-dark p-2 mb-3" style={{textAlign:"center"}}>Listing Posts- {props.posts.length}</h2>
                <Row>
                    {
                        props.posts.map(post => {
                            return <Col md="2" className="mb-4"  key={post.id}>
                            <Card>
                            <CardImg top width="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOPcKakPYfG0ekAQryITAtHekK7FvxU66eHCo5adJr-XhFZH1&s" height="120px" width="50px" alt="Card image cap"/>
                             <CardBody>
                                 <CardTitle >
                                     <Link to ={`/posts/${post.id}`}>
                                     {post.title}
                                     </Link>
                                 </CardTitle>
                             </CardBody>
                            </Card>
                            
                            </Col>
                        })
                    }
               </Row>
            </div>
        )
    }

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(UserPosts)