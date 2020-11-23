import React, { Component } from 'react'
import { connect } from 'react-redux';
import Book from '../components/Books/Book';
import { fetchBooks ,deleteBook } from '../actions/book.action';
import { history } from '../index';

export class Books extends Component {
    
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.onFetch();
    }

    handleEdit = (book) => {
        history.push({
        pathname:`/edit/${book.id}`,
            state: {
                book: book
            }   
        });
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
                                    <Book 
                                    key = {book.id}
                                    book={book}
                                    onDelete ={this.props.onDelete}
                                    onEdit={this.handleEdit.bind(this)}
                                    />
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

const mapDispatchToProps = (dispatch) => {
    return  {
        onFetch:() => {
         dispatch(fetchBooks());
        },
        onDelete:(id) => {
         dispatch(deleteBook(id));
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (Books)
