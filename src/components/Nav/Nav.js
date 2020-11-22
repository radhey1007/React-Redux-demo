import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.notifyPathName(window.location.pathname); 
    }
    
    render() {
        return (
            <div>
              {
                  this.props.pathname ==='/' ?
                  <Link to="/create">Add New</Link> : ''
              }   
            </div>
        )
    }
}

export default Nav



