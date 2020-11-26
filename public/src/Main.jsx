import React from 'react'
import {connect} from "react-redux";
import {mapStateToProps} from "./store/utils/mapStateToProps";
import {mapDispatchToProps} from "./store/utils/mapDispatchToProps";
import {mergeProps} from "./store/utils/mergeProps";
import Modal from "./components/Modal";
import TaskDisplayer from "./components/TaskDisplayer";

export default connect(() => mapStateToProps('main'), mapDispatchToProps, mergeProps)((props) => {
    return (
        <>
            {props.modalState.isOpen ? <Modal/> : null}
            <TaskDisplayer/>
        </>
    )
})
