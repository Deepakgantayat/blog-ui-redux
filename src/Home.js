//es6 - module loading
import React from 'react'
import {connect} from 'react-redux'
import {increment} from './actions/count'

function HomeComponent(props){
    console.log(props)
    return (
        <div>
            <h2>Welcome to our Website</h2>
            
            <h2>{props.count}</h2>
            <button onClick = {()=>{
                {props.dispatch(increment())}
            }}
            
            >up</button>
        
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(HomeComponent)