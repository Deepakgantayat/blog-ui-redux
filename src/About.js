import React from 'react'
import {connect} from 'react-redux'
import {increment} from './actions/count'

function About(props){
    return(
        <div>
            <h2>About us page</h2>

            <button onClick= {()=>{
                props.dispatch(increment())
            }}>up</button>
        </div>
    )
}

export default connect()( About)