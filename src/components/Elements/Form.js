import React, {useState} from 'react';

export default function Form( {className} ) {
    return (
        <div className="grid-component">
            <div
                className={"grid-content grid-newsletter " + className}>
                <form>

                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" id="" className="form-control" placeholder="Name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Surname</label>
                        <input type="text" id="" className="form-control" placeholder="Surname"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Message</label>
                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Some switch</label>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>
                                Lorem ipsum dolor sit amet
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Single Choice</label>

                        <div className="radio">
                            <label>
                                <input type="radio"/>
                                lorem
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"/>
                                ipsum
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"/>
                                dolor
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    )
}