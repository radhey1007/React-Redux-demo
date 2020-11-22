import {
        ADD_BOOK_ERROR,
        ADD_BOOK_SUCCESS,
        ADD_BOOK_LOADING,
        DELETE_BOOK_ERROR,
        DELETE_BOOK_SUCCESS,
        DELETE_BOOK_LOADING,
        EDIT_BOOK_ERROR,
        EDIT_BOOK_SUCCESS,
        EDIT_BOOK_LOADING,
        FETCH_BOOK_ERROR,
        FETCH_BOOK_SUCCESS,
        FETCH_BOOK_LOADING
} from '../actions/types';

import { books } from '../Data/data';

//CREATE---------------------------------------------------------------------

export const createBook = (book) => {
    console.log(book , '==========');
    const data = {
        title:book.title,
        author:book.author,
        year:book.year
    }
    debugger;
    return (dispatch) => {
        //call post api
    }
}

//EDIT-----------------------------------------------------------------------
//DELETE---------------------------------------------------------------------
//FETCH----------------------------------------------------------------------

export const fetchBooksSuccess = (data) => {
    return {
        type:FETCH_BOOK_SUCCESS,
        payload:data
    }
}

export const fetchBooksLoading = (data) => {
    return {
        type: FETCH_BOOK_LOADING,
        payload:data
    }
}


export const fetchBooks = () => {
    let isShowLoading = true;
    return (dispatch) => {
        let isShowLoading = true;  
        dispatch(fetchBooksLoading(isShowLoading));
        // adding custom delay for showing loading
        setTimeout(() => {  
            dispatch(fetchBooksSuccess(books));
            isShowLoading = false;    
            dispatch(fetchBooksLoading(isShowLoading));
        }, 2000);        
        
    }   
}