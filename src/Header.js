import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header className='header'>
                <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                <h1>U.C.R.A. Inc.</h1>
                <NavLink exact activeClassName='selected' to='/search'>search</NavLink>
            </header>
        )
    }
}
)