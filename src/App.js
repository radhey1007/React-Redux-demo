import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './containers/Books';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Createbook from './containers/Createbook';
import Nav from './components/Nav/Nav';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pathname:''
    };
    this.notifyPathName = this.notifyPathName.bind(this);
  }

  notifyPathName = (pathname) => {
    this.setState({
      pathname:pathname
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav 
          notifyPathName = {this.notifyPathName}
          pathname = {this.state.pathname}
          />  
           <Switch>
            <Route path="/"
                   exact
                   component= {() => <Books />}
            />
            <Route path="/create"
                   exact
                   component= {() => <Createbook />}
            />
            <Route path="/edit/:id"
                   exact
                   component= {(props) => <Createbook {...props}/>}
            />
           </Switch>
        </div>
      </Router>
    )
  }
}

export default App

