import React from 'react'
import {Todo} from "../components/Todo";

import s from '../stylesheets/todo.module.css'

export class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
            ]
        }
        this.updateStatus.bind(this);
        console.log(props)
    }

    updateStatus = (id) => {
        this.setState({
            todoData: this.state.todoData.map(todo => id === todo.id ? {
                ...todo,
                status: todo.status === "Todo" ? "In Progress": todo.status === "In Progress" ? "Complete" : "Todo",
                buttonText: todo.buttonText === "Start" ? "Mark as complete": todo.buttonText === "Mark as complete" ? "Renew" : "Start",
            } : todo)
        })
    }

    mapTodoData = () => this.state.todoData.map((todo) => <Todo {...todo} updateStatus={this.updateStatus}/>)

    render() {
        return (
            <div className={s.content}>
                {this.mapTodoData()}
            </div>
        )
    }
}
