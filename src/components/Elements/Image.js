import React, {useState} from 'react';

export default function Image( {align} ) {
    return (
        <div className="grid-component">
            <div className={"grid-content grid-image " + align}>
                <img className="img-responsive" src="/image.png"/>
            </div>
        </div>
    )
}