import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


function UserList(props){
    // constructor(){
    //     super()
    //     this.state = {
    //         users: []
    //     }
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //         const users = response.data
    //         this.setState({users})
    //     })
    // }
    
        return(
            <div>
                <h2>Listing Users- {props.users.length}</h2>
                <ul>
                    {
                        props.users.map(user => {
                            return <li key = {user.id}><Link to= {`/users/${user.id}`}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UserList)