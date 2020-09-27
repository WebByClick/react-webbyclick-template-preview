import React, {useState} from 'react';
import {properties} from "./properties";
import {Element} from "./Element";


export function Elements( props ) {
    return (
        <div id="grid-content" className="content">
            <div className="grid-section grid-section-bright">
                <div className="container grid-container">
                    <div className="row grid-row">
                        <div className="col-md-60 col-xs-60 grid-cell">
                            <div className="grid-component">
                                <div className="grid-content grid-heading editable-content">
                                    <h1>Elements</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {
                Object.keys(properties).map((element, i) => (
                    <Element name={element} element={properties[element]}/>
                ))
            }
        </div>
    )
}