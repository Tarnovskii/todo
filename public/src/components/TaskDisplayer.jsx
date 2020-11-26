import React from 'react'
import {mapStateToProps} from "../store/utils/mapStateToProps";
import {mapDispatchToProps} from "../store/utils/mapDispatchToProps";
import {mergeProps} from "../store/utils/mergeProps";
import {connect} from "react-redux";

import preloader from '../img/preloader.svg'

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)((props) => {

    const taskMapper = (task, index) => {
        return (
            <div key={index}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
        )
    }

    return (
        <div>
            {props.tasksState.isFetching ? <img src={preloader}/> : null}
            <button onClick={props.tasksActions.getAllTasks}>
                Взять таски
            </button>
            {props.tasksState.tasks.map(taskMapper)}
        </div>
    )
})
