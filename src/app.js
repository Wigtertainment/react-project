import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link
} from 'react-router-dom'
import Counter from './Counter';
import Topics from './topics';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.handleToggle = this.handleToggle.bind(this);
    };

    handleToggle() { this.setState({ open: !this.state.open }) };

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonTouchTap={this.handleToggle}
                        />
                        <Router>
                            <div>
                                <Drawer
                                    open={this.state.open}
                                    docked={false}
                                    width={200}
                                    onRequestChange={(open) => this.setState({ open })}>
                                    <div>
                                        <MenuItem onTouchTap={() => { this.setState({ open: false }); }} containerElement={<Link to="/" />}>Home</MenuItem>
                                        <MenuItem onTouchTap={() => { this.setState({ open: false }); }} containerElement={<Link to="/about" />}>About</MenuItem>
                                        <MenuItem onTouchTap={() => { this.setState({ open: false }); }} containerElement={<Link to="/counter" />}>Counter</MenuItem>
                                        <MenuItem onTouchTap={() => { this.setState({ open: false }); }} containerElement={<Link to="/topics" />}>Topics</MenuItem>
                                    </div>
                                </Drawer>

                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={Address} />
                                <Route path="/topics" component={Topics} />
                                <Route path="/counter" component={Counter} />
                            </div>
                        </Router>
                    </div>

                </MuiThemeProvider>

            </div>
        )
    }
}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 56410 Montabaur Germany.</h1>

export default App