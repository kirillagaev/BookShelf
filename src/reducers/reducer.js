import initialState from '../constants/initialState';
import * as types from '../constants/types';

function mainReducer(state = initialState, action) {
    switch(action.type){
        case types.app.CHECKED_FILTER: {
            const { filter, filterType } = action;

            let nextState = Object.assign({}, state);

            if(action.checked && !nextState.filter[filterType].includes(filter)){
                nextState.filter[filterType].push(filter);
            }

            else if(!action.checked && nextState.filter[filterType].includes(filter)){
                nextState.filter[filterType].splice(nextState.filter[filterType].indexOf(filter),1);
            }
            return nextState;
        }
        case types.app.ADD_FRAGMENT_BOOK: {
            let nextState = Object.assign({}, state);
            nextState.fragmentBook = action.fragmentBook;
            return nextState;
        }
        default:
            return state;
    }
}

export default mainReducer;