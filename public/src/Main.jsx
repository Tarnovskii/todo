import React from 'react'
import {connect} from "react-redux";
import {mapStateToProps} from "./store/utils/mapStateToProps";
import {mapDispatchToProps} from "./store/utils/mapDispatchToProps";
import {mergeProps} from "./store/utils/mergeProps";
import Modal from "./components/Modal";

export default connect(() => mapStateToProps('main'), mapDispatchToProps, mergeProps)((props) => {
    console.log(props)
    return (
        <>
            {props.modalState.isOpen ? <Modal/> : null}
            <div onClick={() => {
                props.modalActions.updateModalContent((props) => (
                    <div> <button onClick={props.close}>Закрыть модалку</button></div>
                ))
                props.modalActions.updateModalVisibility(true)
            }}>
                Page
            </div>
        </>
    )
})
