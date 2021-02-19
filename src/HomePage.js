import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
export default withRouter(class HomePage extends Component {
    render() {
        return (
            <main className='home'>
                <h1>THIS IS THE OFFICIAL HOME PAGE OF U.C.R.A. INC</h1>
                <NavLink exact className='link' to='/search'> CLICK HERE: Definitly the sEarch page,</NavLink>
            </main>
        )
    }
})
