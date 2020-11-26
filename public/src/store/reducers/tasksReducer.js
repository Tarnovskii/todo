export const tasksState = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_TASKS_REQUEST_STARTED':
            return {...state, isFetching: true}
        case 'GET_ALL_TASKS_REQUEST_SUCCESS':
            return {...state, tasks: action.value, isFetching: false}
        case 'GET_ALL_TASKS_REQUEST_FAILURE':
            console.error(action.value);
            return {...state, isFetching: false};
        default:
            return state;

    }
}
