import React, {useState} from 'react';

export default function Video( props ) {
    return (
        <div className="grid-component">
            <div className="grid-content grid-video" data-grid-ratio="0.6">
                <iframe className="video-iframe" style={{width:'100%'}} type="text/html"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"/>
            </div>
        </div>
    )
}