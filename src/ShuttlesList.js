import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class ShuttlesList extends Component {
    render() {
        return (
            <ul className='shuttles'>
                {this.props.data.map(shuttleObj => 
                    <Link to={`shuttles/${shuttleObj.name}`}>
                        <li 
                            shuttlename={shuttleObj.name}   
                            launched={shuttleObj.launch_date}
                            crew={shuttleObj.crew}
                            key={Math.random()}>   
                            {shuttleObj.name}
                        </li>
                    </Link>
                )}
            </ul>
        )
    }
}
