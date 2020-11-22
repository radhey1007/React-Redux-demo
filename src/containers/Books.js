import React, { Component } from 'react'
import { connect } from 'react-redux';
import Book from '../components/Books/Book';
//import { books } from '../Data/data';


export class Books extends Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        if(this.props.isLoading) {
            return (
                <p>Loading...</p>
            )
        } else {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Year</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.books.map(book => {
                                return (
                                    <Book key = {book.id} book={book}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
       }
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksData.books || [],
        isLoading: state.booksData.isLoading
    }
}

export default connect(mapStateToProps , null) (Books)
