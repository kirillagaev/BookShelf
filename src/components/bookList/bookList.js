import React from 'react';
import PropTypes from 'prop-types';

import BookCard from './bookCard';

createBookList.propTypes = {
    list: PropTypes.object,
    filter: PropTypes.object,
    addFragmentBook: PropTypes.func
};

function createBookList(props) {
    const { items } = props.list;
    const { filter, addFragmentBook } = props;

    function handlerFilter(items, filter) {
        for(let [key, value] of Object.entries(filter)){
            if(value.length === 0){
                continue;
            }
            else{
                return items.filter((e)=>{
                    return value.includes(e.volumeInfo[key].toString())});
            }
        }
        return items;
    }

    return(
        <div id="container">
            <div className = 'bookList'>
            <header>{`Всего книг: ${items.length}`}</header>
            <main>
                {handlerFilter(items, filter).map((i)=>
                    <BookCard key={i.id} book={i} addFragmentBook={addFragmentBook}/>
                )}
            </main>
            <footer>

            </footer>
            </div>
        </div>
    )
}

export default createBookList;