import React from 'react';

import Loader from 'react-loaders';

export default class Emergencies extends React.Component {

    render() {

        if (this.props.emergencies === null) {

            return (
                <Loader type="ball-rotate" />
            )

        }

        if (this.props.emergencies.length > 0) {

            let emergencies = this.props.emergencies.map(emergency => {

                return <tr key={emergency.Number}>
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