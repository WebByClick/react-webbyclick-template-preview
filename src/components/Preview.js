import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Homepage} from "./Homepage";

function Preview() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Homepage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Preview;
