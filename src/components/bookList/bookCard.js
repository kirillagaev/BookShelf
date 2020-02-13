import React from 'react';
import PropTypes from 'prop-types';

bookCard.propTypes = {
    book: PropTypes.object
};

function bookCard(props) {
    const { addFragmentBook } = props;
    const { thumbnail } = props.book.volumeInfo.imageLinks;
    const { title, authors,description } = props.book.volumeInfo;
    const { textSnippet } = props.book.searchInfo;

    function handlerClick(e) {
        e.preventDefault();
        addFragmentBook(textSnippet);
    }

    return(
        <div className="bookCard" onClick={handlerClick} data-book={textSnippet}>
            <img src={thumbnail} />
            <div className="bookDetails">
                <p>{`Название: "${title}"`}</p>
                <p>{`Автор: ${authors}`}</p>
                Описание:<textarea value={`${description}`} readOnly/>
            </div>
        </div>
    )
}

export default bookCard;