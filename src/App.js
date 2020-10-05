import React from 'react';
import {TodoContainer} from "./containers/TodoContainer";
import {Route, Switch} from "react-router";
import {TodoCreator} from "./containers/TodoCreator";
import {Link} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: undefined,
        }
        this.updateTaskList.bind(this);
    }

    updateTaskList = (newTask) => {
        this.setState({
            newTask: newTask
        })
    }

    render() {
        return (
            <Switch>
                <Route exact path={'/todoList'}>
                    <TodoContainer newTask={this.state.newTask}/>
                </Route>
                <Route exact path={'/todoCreator'}>
                    <TodoCreator updateTaskList={this.updateTaskList}/>
                </Route>
                <Route path={'/'}>
                    <Link to={'/todoList'}>Todo List</Link>
                    <Link to={'/todoCreator'}>Todo Creator</Link>
                </Route>
            </Switch>
        )
    }
}

export default App;
