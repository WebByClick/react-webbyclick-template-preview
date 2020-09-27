import React, {useState} from 'react';

export default function OpeningHours( props ) {
    return (

        <div className="grid-component">
            <div className="grid-content grid-custom">

                <p className="opening-hours-heading text-center">Opening hours</p>

                <table className="table table-hover table-bordered opening-hours-table js-opening-hours">
                    <tbody>
                    <tr data-oh-day="1">
                        <td>Monday</td>
                        <td>8:00 - 12:00</td>
                        <td>Closed</td>
                    </tr>
                    <tr data-oh-day="2">
                        <td>Tuesday</td>
                        <td>8:00 - 12:00</td>
                        <td>Closed</td>
                    </tr>
                    <tr data-oh-day="3">
                        <td>Wednesday</td>
                        <td>8:00 - 12:00</td>
                        <td>Closed</td>
                    </tr>
                    <tr data-oh-day="4">
                        <td>Thursday</td>
                        <td>8:00 - 12:00</td>
                        <td>13:00 - 17:00</td>
                    </tr>
                    <tr data-oh-day="5">
                        <td>Friday</td>
                        <td>8:00 - 12:00</td>
                        <td>13:00 - 17:00</td>
                    </tr>
                    <tr data-oh-day="6">
                        <td>Saturday</td>
                        <td>8:00 - 12:00</td>
                        <td>Closed</td>
                    </tr>
                    <tr data-oh-day="0">
                        <td>Sunday</td>
                        <td>8:00 - 12:00</td>
                        <td>Closed</td>
                    </tr>
                    </tbody>
                </table>

                <p className="text-center">Footer</p>
            </div>
        </div>
    )
}