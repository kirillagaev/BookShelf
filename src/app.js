import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateBookList from './components/bookList/bookList';
import Header from './components/header/header';
import LeftSide from './components/sides/leftSide';
import RightSide from './components/sides/rightSide';

import { changeFilter, addFragmentBook } from './actions/actions';

App.propTypes = {
    children: PropTypes.node
};

function App(props) {
    const { list, filter, fragmentBook } = props.state;
    const { actions } = props;
    return(
        <div className="app">
            <Header/>
            <div className="main">
                <LeftSide list={list} changeFilter={actions.changeFilter}/>
                <RightSide fragmentBook={fragmentBook}/>
                <CreateBookList list={list} filter={filter} addFragmentBook={actions.addFragmentBook}/>
            </div>
        </div>
    )
}


export const mapStateToProps = state =>{
    return {
       state
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            changeFilter,
            addFragmentBook
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);