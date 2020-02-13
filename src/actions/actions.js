import * as types from '../constants/types';

export function changeFilter(filterType, checked, filter) {
    return {
        type: types.app.CHECKED_FILTER,
        filterType,
        checked,
        filter
    }
}

export function addFragmentBook(fragmentBook) {
    return {
        type: types.app.ADD_FRAGMENT_BOOK,
        fragmentBook
    }
}