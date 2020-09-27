import React, {useState} from 'react';

export default function Gallery( props ) {
    return (
        <div className="grid-component">
            <div className="grid-content grid-gallery">
                <div className="gallery-wrapper clearfix">

                    <div className="image-wrap">
                        <a href="/image.png">
                            <img src="/image.png"/>
                            <div className="image-over">
                                <i className="fa fa-3x fa-search" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>

                    <div className="image-wrap">
                        <a href="/image.png">
                            <img src="/image.png"/>
                            <div className="image-over">
                                <i className="fa fa-3x fa-search" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>

                    <div className="image-wrap">
                        <a href="/image.png">
                            <img src="/image.png"/>
                            <div className="image-over">
                                <i className="fa fa-3x fa-search" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>

                    <div className="image-wrap">
                        <a href="/image.png">
                            <img src="/image.png"/>
                            <div className="image-over">
                                <i className="fa fa-3x fa-search" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}