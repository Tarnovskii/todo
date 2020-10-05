import React from 'react'
import {Creator} from "../components/CreatorComponent";

export class TodoCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskFields: {
                id: 0,
                title: "",
                description: "",
                status: "todo",
                date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-0${new Date().getDate()}`,
                buttonText: ""
            }
        }

        this.formHandler.bind(this);
        this.submitNewTask.bind(this);
    }

    submitNewTask = () => {
        this.props.updateTaskList(this.state.newTaskFields)
        this.setState({
            newTaskFields: {
                id: 0,
                title: "",
                description: "",
                status: "todo",
                date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-0${new Date().getDate()}`,
                buttonText: ""
            }
        });
    }

    formHandler = (action) => {
        switch (action.type) {
            case "CHANGE_TITLE":
                this.setState({
                    newTaskFields: {
                        ...this.state.newTaskFields,
                        title: action.value,
                    }
                })
                break;
            case "CHANGE_DESCRIPTION":
                this.setState({
                    newTaskFields: {
                        ...this.state.newTaskFields,
                        description: action.value,
                    }
                })
                break;
            case "CHANGE_DATE":
                this.setState({
                    newTaskFields: {
                        ...this.state.newTaskFields,
                        date: action.value,
                    }
                })
                break;
            case "UPDATE_RADIO":
                this.setState({
                    newTaskFields: {
                        ...this.state.newTaskFields,
                        status: action.value
                    }
                })
            default:
                console.log(action);
                break;
        }
    }

    render() {
        return <Creator confirm={this.submitNewTask} formHandler={this.formHandler} values={{...this.state.newTaskFields}}/>
    }
}
