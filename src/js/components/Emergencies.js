/**
 * @author George Kamtziridis <georgekam96@gmail.com>
 */

import React from 'react';

import Loader from 'react-loaders';

/**
 * @class Emergencies
 * @classdesc The react component which makes up the emergency section of Country component.
 * @extends React.Component
 */
export default class Emergencies extends React.Component {

    /**
	 * Render the component's view.
     * @memberOf Emergencies
     * @instance
     */
    render() {

        if (this.props.emergencies === null) {

            return (
                <Loader type="ball-rotate" />
            )

        }

        if (this.props.emergencies.length > 0) {

            let emergencies = this.props.emergencies.map(emergency => {

                return <tr key={emergency.Type}>
                            <td>{ emergency.Type }</td>
                            <td>{ emergency.Number }</td>
                        </tr>;

            });

            return (
                <div>
                    <h3><b>Emergency Phone Numbers</b></h3>
                    <table class="table table-hover center">
                        <thead>
                            <tr>
                                <td><b>Emergency Type</b></td>
                                <td><b>Phone Number</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {emergencies}
                        </tbody>
                    </table>
                </div>
            )

        } else {

            return (
                <h3>The only emergency phone number for this country is 112.</h3>
            )

        }

    }

}