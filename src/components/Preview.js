import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Homepage} from "./Homepage";
import {BannerLarge} from "./BannerLarge";

function Preview() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Homepage/>
                </Route>
                <Route path="/banner-large">
                    <BannerLarge/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Preview;
