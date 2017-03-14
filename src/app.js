import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link
} from 'react-router-dom'
import Counter from './Counter';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={Address} />
                    <Route path="/topics" component={NotFound} />
                    <Route path="/counter" component={Counter} />
                </div>
            </Router>
        )
    }
}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 56410 Montabaur Germany.</h1>
const NotFound = () => (
    <h1>404.. This page is not found!</h1>)

export default App