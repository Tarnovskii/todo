import React from 'react';
import {TodoContainer} from "./containers/TodoContainer";
import {Route, Switch} from "react-router";
import {TodoCreator} from "./containers/TodoCreator";
import {Link} from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route exact path={'/todoList'} component={TodoContainer}/>
            <Route exact path={'/todoCreator'} component={TodoCreator}/>
            <Route path={'/'}>
                <Link to={'/todoList'}>Todo List</Link>
                <Link to={'/todoCreator'}>Todo Creator</Link>
            </Route>
        </Switch>
    )
}

export default App;
