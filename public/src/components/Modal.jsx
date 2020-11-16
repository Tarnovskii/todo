import React from "react";
import ReactDOM from 'react-dom'
import {mapStateToProps} from "../store/utils/mapStateToProps";
import {mapDispatchToProps} from "../store/utils/mapDispatchToProps";
import {mergeProps} from "../store/utils/mergeProps";
import {connect} from "react-redux";

import s from '../stylesheets/modal.module.css'

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(class extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div')
    }

    componentDidMount() {
        document.body.appendChild(this.el)
        this.el.className = s.wrapper
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(<this.props.modalState.content
            close={() => this.props.modalActions.updateModalVisibility(false)}/>, this.el)
    }

})
