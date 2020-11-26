import {bindActionCreators} from "redux";
import * as mainPageActions from '../actions/mainPageActions'
import * as modalActions from '../actions/modalActions'
import * as tasksActions from '../actions/tasksActions'


export const mapDispatchToProps = () => dispatch => {
    return {
        mainActions: bindActionCreators({
            ...mainPageActions
        }, dispatch),
        modalActions: bindActionCreators({
            ...modalActions
        }, dispatch),
        tasksActions: bindActionCreators({
            ...tasksActions
        }, dispatch)
    }
}

