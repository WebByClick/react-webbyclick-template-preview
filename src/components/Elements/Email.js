import React, {useState} from 'react';

export default function Email( {className} ) {
    return (
        <div className="grid-component">
            <div className={"grid-content grid-email " + className}>
                <form>
                    <span className="contact-form-heading">Heading</span>

                    <div className="row">
                        <div className="col-md-30 form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text"
                                   className="form-control email-name"
                                   placeholder="Name"/>
                        </div>

                        <div className="col-md-30 form-group">
                            <label htmlFor="surname">Surname</label>
                            <input name="surname" type="text"
                                   className="form-control email-surname"
                                   placeholder="Surname"/>
                        </div>

                        <div className="col-md-30 form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="text"
                                   className="form-control email-email"
                                   placeholder="Email"/>
                        </div>

                        <div className="col-md-30 form-group">
                            <label htmlFor="telephone">Telephone</label>
                            <input name="telephone" type="text"
                                   className="form-control email-telephone"
                                   placeholder="Phone"/>
                        </div>

                        <div className="form-group col-md-60">
                            <label htmlFor="message"></label>
                            <textarea name="message" className="form-control email-message required" rows="6"
                                      placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-60">
                            <button type="submit" className="btn email-form-submit ">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}