import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Col,Row} from 'reactstrap'
import {Card , CardImg, CardBody, CardTitle} from 'reactstrap'


function UserList(props){    
        return(
           <div>
               <br/>
               <h2 className="text-light bg-dark p-2 mb-3" style={{textAlign:"center"}}>
                    Listing users- {props.users.length}
               </h2>
               <br/>
               <Row>
                    { props.users.map(function(user){
                        return (
                            <Col md="2" className="mb-4" key={user.id}>
                                <Card>
                                <CardImg top width="50%" src="https://pbs.twimg.com/media/CsLHZiuXYAAQvLe.jpg" height="120px" width="50px" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>
                                    <Link to={`/users/${user.id}`}>{ user.name }</Link>
                                    </CardTitle>
                                </CardBody> 
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
               
           </div>
     
        )
    }

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UserList)