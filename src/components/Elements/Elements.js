import React, {useState} from 'react';
import {Footer} from "../Footer";
import {properties} from "./properties";

export default function Elements( props ) {
    const elements = Object.keys( properties );


    return (
        <div className="wrap">

            <div id="grid-content" className="content">
                <div id="main" className="grid-section grid-section-bright">
                    <div className="container grid-container">
                        <div className="row grid-row">
                            <div className="col-md-60 grid-cell grid-cell-content">
                                <div className="grid-component">
                                    <div className="grid-content grid-heading editable-content"
                                         data-grid-content="heading">
                                        <h1 className=" grid-align-left">Lorem Ipsum</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    elements.map( ( element, i ) => {

                        return (
                            <div id={element} key={element} className="grid-section grid-section-bright">
                                <div className="container grid-container">
                                    <div className="row grid-row">
                                        <div className="col-md-60 grid-cell grid-cell-content">
                                            <div className="grid-component">
                                                <div className="grid-content grid-heading editable-content"
                                                     data-grid-content="heading">
                                                    <h2 className=" grid-align-left">{element}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }

                <Footer/>
            </div>
        </div>
    )
}