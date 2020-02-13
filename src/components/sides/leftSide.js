import React from 'react';
import PropTypes from "prop-types";

import Filtr from '../filtres/filter';

leftSide.propTypes = {
    children: PropTypes.node,
    list: PropTypes.object,
    changeFilter: PropTypes.func
};

function leftSide(props) {

    const authors = Array.from(new Set(
        props.list.items.map((i)=>{
            return i.volumeInfo.authors.toString();
        })
    ));
    const title = Array.from(new Set(
        props.list.items.map((i)=>{
            return i.volumeInfo.title.toString();
        })
    ));
    return (
        <div className="leftSide">
            <p id="infoText">Можно использовать только один тип фильтра</p>
            <p>Отфильтровать по:</p>
            <main>
                <Filtr filterName="Автору" filterType="authors" parameters={authors} changeFilter={props.changeFilter} />
                <Filtr filterName="Названию" parameters={title} filterType="title" changeFilter={props.changeFilter}/>
            </main>
        </div>
    )
}

export default leftSide;