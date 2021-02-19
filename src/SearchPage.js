import React, { Component } from 'react';
import request from 'superagent';
import ShuttlesList from './ShuttlesList';

export default class SearchPage extends Component {
    state = {
        shuttles: [],
        sortBy: ['Name', 'Launched', 'Crew', 'Success'],
        sortOrder: ['asc', 'desc']
    }
    componentDidMount = async () => {
        const data = await request.get('http://jvela-express-sql.herokuapp.com/shuttles')
    
        this.setState({
            shuttles: data.body.results
        })
    }

    handleSortSelected = async e => this.setState({sortBy: e.target.value})
    sortAndUpdate = async e => {
        this.setState({
            sortOrder: e.target.value
        })

        const data = await request.get(`http://jvela-express-sql.herokuapp.com/shuttles?sort=${this.state.sortBy}&direction=${this.state.sortOrder}`)

        await this.setState({
            shuttles: data.body.results
        })
    }
    render() {

        const options = this.state.sortBy.map(option => <option value={option} key={option}>{option}</option>)
        return (
            <main className='search'>
                    <section>
                        <label>Sort By: </label>
                        <select onChange={this.handleSortBy}>
                            {options}
                        </select>
                        <div className='sortControls'>
                            <button className='sortBtn' value='asc' onClick={this.sortAndUpdate}>Ascending</button>
                            <button className='sortBtn' value='desc' onClick={this.sortAndUpdate}>Descending</button>
                        </div>
                    </section>
                    <ShuttlesList data={this.state.shuttles} />
            </main>
        )
    }
}
