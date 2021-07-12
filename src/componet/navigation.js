import React from "react";
import SignupForm from './signupForm';
import SinIn from './sinIn';
import { Switch,Route} from "react-router-dom";

 const  Navigation = () => {
    return (
            <Switch>
                <Route  exact path="/">
                         <SinIn />
                </Route>
                <Route   path="/signupForm">
                        <SignupForm />
                </Route>
            </Switch>
    );
}

export default Navigation;