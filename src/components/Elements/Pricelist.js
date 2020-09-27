import React, {useState} from 'react';

export default function Pricelist( props ) {

    const items = [
        {
            name:   'Lorem ipsum dolor sit amet',
            notice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price:  12.99
        },
        {
            name:   'Excepteur sint occaecat',
            notice: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price:  9.99
        },
        {
            name:   'Duis aute irure dolor',
            notice: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            price:  14.99
        }
    ];


    return (
        <div className="grid-component">
            <div className="grid-content grid-pricelist">
                {
                    items.map((item, i) => (
                        <div key={i} className="pricelist-row">
                            <div className="pricelist-left">
                                <div className="pricelist-name">{item.name}</div>
                                <div className="pricelist-notice">{item.notice}</div>
                            </div>
                            <div className="pricelist-right">{item.price}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}