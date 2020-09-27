import React, {useState} from 'react';

export default function Button( {align, className} ) {
    return (
        <div className="grid-component">
            <div className={"grid-content grid-button " + align}>
                <a href="#" className={"btn " + className}>Button</a>
            </div>
        </div>
    )
}