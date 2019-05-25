export const SET_STACK = 'SET_STACK';
export function setStack(stack) {
    return {
        type: SET_STACK,
        stack
    }
}

/*simplified above, whole thing is an action creator
function setStack(stack) {
    const action = {
        type: 'SET_STACK',
        stack: stack
    };
    return action;
}
*/

export const LOAD_STACKS = 'LOAD_STACKS';
export function loadStacks(stacks) {
    return {
        type: LOAD_STACKS,
        stacks
    }
}

export const ADD_STACK = 'ADD_STACK';
export function addStack(stack) {
    return {
        type: ADD_STACK,
        stack
    }
}