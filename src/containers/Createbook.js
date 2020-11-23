import React, { Component } from 'react'
import { createBook } from '../actions/book.action';
import { connect } from 'react-redux';
import './Createbook.css';

export class Createbook extends Component {

    constructor(props) {
        super(props);    
        this.state = {
            id:0,
            author:'',
            title:'',
            year:''
        }
    }

    componentWillMount(){
        if(this.props.location && this.props.location.state) {
            this.setState({
                id:this.props.location.state.book.id,
                title:this.props.location.state.book.title,
                author:this.props.location.state.book.author,
                year:this.props.location.state.book.year
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
    }

    handleValueChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState({
            title:'',
            author:'',
            year:''
        })
    }
    
    render() {
        return (
            <div className="create-book">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="title" 
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.handleValueChange.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="author" 
                    placeholder="Enter Author"
                    value={this.state.author}
                    onChange={this.handleValueChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="year" 
                    placeholder="Enter Year"
                    value={this.state.year}
                    onChange={this.handleValueChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-danger">Add</button>
                    <button type="submit" className="btn btn-primary" onClick={this.handleReset.bind(this)}>Cancel</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd:(book) => { 
             dispatch(createBook(book));
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Createbook);
