import { combineReducers } from 'redux';
import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions';

//set default state to empty object so it doesn't return undefined if that case ever happens
function stack(state = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}

function stacks(state = [], action) {
    switch (action.type) {
        case LOAD_STACKS:
            return action.stacks;
        case ADD_STACK:
            return [...state, { ...action.stack, id: state.length }]//since index start at 0 using the lenght property will give you the next index for adding the id
        default:
            return state;
    }
}

export default combineReducers({ stack, stacks });