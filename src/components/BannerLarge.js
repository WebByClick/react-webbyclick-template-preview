import React from 'react';
import {Footer} from "./Footer";

export function BannerLarge( props ) {
    return (
        <div className="wrap">
            <div id="grid-content" className="content">
                <div id="section1" className="grid-section grid-section-bright">
                    <div className="container grid-container">
                        <div className="row grid-row">
                            <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                        </div>
                        <div className="row grid-row">
                            <div className="col-md-60 grid-cell grid-cell-content">
                                <div className="grid-component">
                                    <div className="grid-content grid-heading editable-content"
                                         data-grid-content="heading">
                                        <h1 className=" grid-align-left">Large Banner</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row grid-row">
                                <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                            </div>
                            <div className="row grid-row">
                                <div className="col-md-29 grid-cell grid-cell-column">
                                    <div className="row grid-row">
                                        <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                                    </div>
                                    <div className="row grid-row">
                                        <div className="col-md-60 grid-cell grid-cell-content">
                                            <div className="grid-component">
                                                <div className="grid-content grid-image  grid-align-center"
                                                     data-grid-content="image">
                                                    <img className="img-fluid"
                                                         src="https://klikem.cz/img/grid-dnd.png"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row grid-row">
                                        <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                                    </div>
                                </div>
                                <div className="col-md-31 grid-cell grid-cell-column">
                                    <div className="row grid-row">
                                        <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                                    </div>
                                    <div className="row grid-row">
                                        <div className="col-md-60 grid-cell grid-cell-content">
                                            <div className="grid-component">
                                                <div
                                                    className="grid-content grid-text editable-content clearfix  "
                                                    data-grid-content="text">
                                                    <p className="grid-align-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row grid-row">
                                        <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                                    </div>
                                    <div className="row grid-row">
                                        <div className="col-md-60 grid-cell grid-cell-content">
                                            <div className="grid-component">
                                                <div className="grid-content grid-button grid-align-left "
                                                     data-grid-content="button">
                                                    <a href="#" target="_self"
                                                       className="btn btn-lg btn-br-sm btn-inv ">Chci vědět
                                                        více!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row grid-row">
                                        <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row grid-row">
                                <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                            </div>
                            <div className="row grid-row">
                                <div className="col-md-60 col-xs-60 grid-cell grid-cell-empty"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}