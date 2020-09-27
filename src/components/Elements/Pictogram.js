import React, {useState} from 'react';

export default function Pictogram( {align, className} ) {
    return (
        <div className="grid-component">
            <div className={"grid-content grid-icon " + align}>
                <span className={"icon-wrapper " + className}>
                    <i className="fa fa-home"></i>
            </span>
            </div>
        </div>
    )
}