import React from 'react';

function rightSide(props) {

    const { fragmentBook } = props;

    return (
        <div id="container2">
            <div className="rightSide">
                <p>Фрагмент книги:</p>
                <div>
                    {fragmentBook}
                </div>
            </div>
        </div>
    )
}

export default rightSide;