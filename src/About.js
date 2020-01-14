import React from 'react'
import {connect} from 'react-redux'


function About(props){
    return(
        <div className="card text-center">
            <div className="card-header">
            ABOUT US
            </div>
            <div className="card-body">
              <h5 className="card-title">Welcome To My Website - .Blog</h5>
              <p className="card-text">This Website Is Designed Focused On The Users Based On Their Blogs And Posts</p>
              <a href="/" class="btn btn-primary">Go To Home</a>
            </div>
            <div className="card-footer text-muted">
            .Blog - Keep Track Of The Blogs /// You Can Reach Us Out - deepakgantayat29@gmail.com
            </div>
            </div>
    )
}

export default connect()( About)