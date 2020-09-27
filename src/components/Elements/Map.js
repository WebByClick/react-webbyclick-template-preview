import React, {useState} from 'react';

export default function Map( props ) {
    return (
        <div className="grid-component">
            <div className="grid-content grid-map">
                <iframe style={{width:'100%'}} frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAxES_Fv3-qIjVe3vWEcTY6q7svaSkUOeU&q=Raznany268&zoom=10"/>
            </div>
        </div>
    )
}