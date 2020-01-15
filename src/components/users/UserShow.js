import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Col,Row} from 'reactstrap'
import {Card ,CardImg, CardSubtitle, CardBody, CardTitle} from 'reactstrap'

function UserShow (props){    
        return(
            <div> 
                <br/>
                {
                    props.user && (
                        <div>
                            <p className="text-light bg-dark p-2 mb-3" style={{textAlign:"center"}}>{props.user.name} - {props.user.email}</p>
                            <h2>All posts</h2>
                           <Row>
                           {
                            props.post.map(ele => {
                            return (
                                <Col md="2" className="mb-4" key={ele.id}>
                                <Card>
                                <CardBody>
                                <CardTitle>Post Of</CardTitle>
                                <CardSubtitle>{props.user.name} - {props.user.email}</CardSubtitle>
                                </CardBody>
                                <CardImg top width="50%" src="https://images.all-free-download.com/images/graphicthumb/autumn_streamjpg_554702.jpg" height="120px" width="50px" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>
                                    <Link to = {`/posts/${ele.id}`} >{ele.title}</Link> 
                                    </CardTitle>
                                    <Link to = "/users">back</Link>
                                </CardBody> 
                                </Card>
                            </Col>
                            )
                            })
                            }
                           </Row>
                           
                           
                        </div>
                    )
                }
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