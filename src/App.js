import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import './App.css';
import ShuttleItem from './ShuttleItem';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            component={SearchPage} 
                        />                        
                        <Route 
                            path="/shuttlename" 
                            exact
                            component={ShuttleItem} 
                        />                        
                    </Switch>
                </Router>
                <footer>
                    ©2021 Ultimate Crappy React Apps Incorporated
                </footer>
            </div>
        )
    }
}
