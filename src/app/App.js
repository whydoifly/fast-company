import React from 'react';
import Users from './components/layouts/users';
import Login from './components/layouts/login';
import Main from './components/layouts/main';
import NavBar from './components/navBar';
import { Route, Switch, Redirect } from 'react-router-dom';

function App () {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
