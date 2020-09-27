import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Homepage} from "./Homepage";
import {BannerLarge} from "./BannerLarge";
import Elements from "./Elements/Elements";

function Preview() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/banner-large" exact={true}>
                    <BannerLarge/>
                </Route>
                <Route path="/elements" exact={true}>
                    <Elements/>
                </Route>
                <Route path="/">
                    <Homepage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Preview;
