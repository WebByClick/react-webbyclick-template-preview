import React, {useState} from 'react';

export default function Newsletter( {className} ) {
    return (

        <div className="grid-component">

            <div className={"grid-content grid-newsletter " + className}>
                <form className="newsletter" method="post">
                    <div className="form-group">
                        <label className="newsletter-label">Label</label>
                        <div className="input-group">
                            <input type="text" name="email" className="form-control newsletter-email required"
                                   placeholder="Placeholder"/>
                            <span className="input-group-btn">
                                        <button className="btn btn-default btn-content newsletter-submit"
                                                type="button">Subscribe</button>
                                    </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}