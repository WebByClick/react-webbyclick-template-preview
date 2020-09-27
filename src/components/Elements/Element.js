import React, {useState} from 'react';
import Button from "./Button";
import Divider from "./Divider";
import Email from "./Email";
import Newsletter from "./Newsletter";
import Form from "./Form";
import Gallery from "./Gallery";
import Heading from "./Heading";
import Image from "./Image";
import Map from "./Map";
import OpeningHours from "./OpeningHours";
import Pictogram from "./Pictogram";
import Pricelist from "./Pricelist";
import Video from "./Video";
import Social from "./Social";
import Text from "./Text";

function ElementComponent( {element, align, className} ) {
    switch ( element ) {
        case 'Button':
            return <Button element={element} align={align} className={className}/>
        case 'Divider':
            return <Divider element={element} align={align} className={className}/>
        case 'Email':
            return <Email element={element} align={align} className={className}/>
        case 'Form':
            return <Form element={element} align={align} className={className}/>
        case 'Gallery':
            return <Gallery element={element} align={align} className={className}/>
        case 'Heading':
            return <Heading element={element} align={align} className={className}/>
        case 'Image':
            return <Image element={element} align={align} className={className}/>
        case 'Map':
            return <Map element={element} align={align} className={className}/>
        case 'Newsletter':
            return <Newsletter element={element} align={align} className={className}/>
        case 'OpeningHours':
            return <OpeningHours element={element} align={align} className={className}/>
        case 'Pictogram':
            return <Pictogram element={element} align={align} className={className}/>
        case 'Pricelist':
            return <Pricelist element={element} align={align} className={className}/>
        case 'Social':
            return <Social element={element} align={align} className={className}/>
        case 'Text':
            return <Text element={element} align={align} className={className}/>
        case 'Video':
            return <Video element={element} align={align} className={className}/>
        default:
            return null
    }
}


export function Element( {name, element} ) {
    const aligns = ['grid-align-left', 'grid-align-center', 'grid-align-right'];

    const permutations = ( permutation, properties ) => {
        const propertyNames = Object.keys( properties );

        if ( propertyNames.length > 0 ) {
            const property = propertyNames[ 0 ];
            const values = properties[ property ];

            const newProperties = Object.assign( {}, properties );
            delete newProperties[ propertyNames[ 0 ] ];

            return values.reduce( ( a, c ) => {
                return a.concat( permutations( permutation.concat( c ), newProperties ) );
            }, [] )
        }

        return [permutation];
    };

    return (

        <div className="grid-section grid-section-bright">
            <div className="container grid-container">
                <div className="row grid-row">
                    <div className="col-md-60 col-xs-60 grid-cell">
                        <div className="grid-component">
                            <div className="grid-content grid-heading editable-content">
                                <h2>{name}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    element.align ? (
                        aligns.map( ( align ) => (
                            <React.Fragment>
                                <div className="row grid-row">
                                    <div className="col-md-60 col-xs-60 grid-cell">
                                        <div className="grid-component">
                                            <div className="grid-content grid-heading editable-content">
                                                <h3>{align}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row grid-row">
                                    {
                                        permutations( [], element.properties ).map( ( permutation, i ) => (
                                            <div className={"col-" + element.size + " grid-cell"}>
                                                <ElementComponent element={name} align={align}
                                                                  className={permutation.join( ' ' )}/>
                                            </div>
                                        ) )
                                    }
                                </div>
                            </React.Fragment>
                        ) )
                    ) : (
                        <div className="row grid-row">
                            {
                                permutations( [], element.properties ).map( ( permutation, i ) => (
                                    <div className={"col-" + element.size + " grid-cell"}>
                                        <ElementComponent element={name} Ma
                                                          className={permutation.join( ' ' )}/>
                                    </div>
                                ) )
                            }
                        </div>

                    )
                }
            </div>
        </div>
    )
}