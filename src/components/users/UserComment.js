import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Col,Row} from 'reactstrap'
import {Card ,CardImg, CardSubtitle, CardBody, CardTitle} from 'reactstrap'

function CommentShow (props){
    
        return(
            <div>
                {
                    props.title && (
                        <div>
                            <br/>
                            <p className="text-light bg-dark p-2 mb-3" style={{textAlign:"center"}}>All Comments For PostId-{props.match.params.id}-Post Title -  {props.title.title} </p>
                             <br/>
                             <Row>
                          {
                         props.comment.map(ele => {
                        return (
                            <Col md="2" className="mb-4" key={ele.id}>
                            <Card>
                            <CardBody>
                            <CardTitle>Post Of</CardTitle>
                            <CardSubtitle>Post Title -  {props.title.title}</CardSubtitle>
                            </CardBody>
                            <CardImg top width="50%" src="https://images.all-free-download.com/images/graphicthumb/autumn_streamjpg_554702.jpg" height="120px" width="50px" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>
                                {ele.name}
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
    console.log(props)
    const id = props.match.params.id
    return {
        title: state.posts.find(post => post.id ===  parseInt(id)),
       post: state.posts.filter(post => post.userId === parseInt(id)),
       comment: state.comments.filter(comment => comment.postId === parseInt(id))
    }
}

export default connect(mapStateToProps)(CommentShow)