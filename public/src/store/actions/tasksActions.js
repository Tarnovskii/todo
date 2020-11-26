import {getAllTasksRequest} from "../../Api/tasksApi";

export const getAllTasks = () => {
    return dispatch => {
        dispatch(getAllTasksRequestStarted());
        setTimeout(() => {
            getAllTasksRequest().then(res => {
                dispatch(getAllTaskRequestSuccess(res.data))
            }).catch(err => dispatch(getAllTasksRequestFailure(err)))
        }, 2000)
    }
}

const getAllTasksRequestStarted = () => {
    return {type: 'GET_ALL_TASKS_REQUEST_STARTED'}
}

const getAllTaskRequestSuccess = (result) => {
    return {type: 'GET_ALL_TASKS_REQUEST_SUCCESS', value: result.map(t => JSON.parse(t))}
}

const getAllTasksRequestFailure = (err) => {
    return {type: 'GET_ALL_TASKS_REQUEST_FAILURE', value: err}
}
