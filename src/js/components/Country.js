import React from 'react';

import Emergencies from './Emergencies';

export default class Country extends React.Component {

    render() {

        console.log('country');

        if (this.props.country === null) {

            return (
                <div></div>
            );

        }

        return(
            <div>
                <h3>General information about <b>{ this.props.country.Name }</b><img src={"./assets/flagIcons/" + this.props.country.Name.toLowerCase()  + '.png'} width="54" height="40" /></h3>
                <table class="table table-hover center">
                    <thead>
                        <tr>
                            <td><b>Languages</b></td>
                            <td><b>Responsiveness</b>
                            <div class="tooltipCore">
                                <span class="fa fa-info-circle"></span>
                                <div class="tooltipText">Time (in seconds) in which the call is answered</div>
                            </div>
                            </td>
                            <td><b>Sim needed for 112 calls</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ this.props.country.Languages == "Unknown" ? "---" : this.props.country.Languages}</td>
                            <td>{ this.props.country.Responsiveness == "Unknown" ? "---" : this.props.country.Responsiveness}</td>
                            <td>{ this.props.country.SimNeeded112 == "Unknown" ? "---" : this.props.country.SimNeeded112}}</td>
                        </tr>
                    </tbody>
                </table>

                <Emergencies emergencies={this.props.emergencies} />

            </div>
        )
    }

}