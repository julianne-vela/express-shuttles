import React, { Component } from 'react'
import request from 'superagent'

export default class ShuttleItem extends Component {
    state = {
        shuttles: [],
    }

    componentDidMount = async () => {
        await this.fetchShuttles()
    }

    wasSuccessful = () => {
        if(this.props.success === true) {
            return 'Yes'
        } return 'Oh nooooooo...'
    }

    fetchShuttles = async () => {
        await this.setState({
            shuttles: []
        })

        const data = await request.get(`http://jvela-express-sql.herokuapp.com/shuttles?name=${this.props.match.params.shuttlename}`)

        await this.setState({
            shuttles: data.body.results[0]
        })
    }
    render() {
        return (
                <div className='shuttleItem'>
                    <p style={{fontWeight: 'bold'}} >Shuttle Name: {this.props.shuttlename} </p>
                    <p>Launched: {this.props.launch_date}</p>
                    <p>Crew: {this.props.crew}</p>
                    <p>Success? {this.wasSuccessful()}</p>
                </div>
        )
    }
}
