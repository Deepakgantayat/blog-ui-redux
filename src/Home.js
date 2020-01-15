//es6 - module loading
import React from 'react'
import {connect} from 'react-redux'

function HomeComponent(props){
    console.log(props)
    return (
        <div className="container  mt-5">
            <h2 style={{textAlign:"center"}}>Welcome to My Website</h2>    
            <img src="https://knockknockwhoisthere.files.wordpress.com/2018/03/dotblog.png" class="rounded mx-auto d-block" alt="..."></img>    
        </div>
    )
}


export default connect()(HomeComponent)