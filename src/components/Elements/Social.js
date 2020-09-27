import React, {useState} from 'react';

export default function Social( {className, align} ) {
    return (
        <div className="grid-component">
            <div
                className={`grid-content grid-social ${className} ${align}`}>

                <a href="#" target="_blank" rel="noopener" className="facebook">
                    <i className="fa fa-facebook"></i>
                </a>

                <a href="#" target="_blank" rel="noopener" className="twitter">
                    <i className="fa fa-twitter"></i>
                </a>

                <a href="#" target="_blank" rel="noopener" className="youtube">
                    <i className="fa fa-youtube"></i>
                </a>

                <a href="#" target="_blank" rel="noopener" className="instagram">
                    <i className="fa fa-instagram"></i>
                </a>

                <a href="#" target="_blank" rel="noopener" className="web">
                    <i className="fa fa-link"></i>
                </a>

            </div>
        </div>
    )
}