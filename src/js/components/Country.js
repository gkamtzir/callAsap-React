import React from 'react';

export default class Country extends React.Component {

    render() {

        console.log('country');

        return(
            <div>
                <h3>General information about <b>{ this.props.country.Name }</b><img src={"./dist/flagIcons/" + this.props.country.Name.toLowerCase()  + '.png'} width="54" height="40" /></h3>
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

                <div v-if="country.OnlyNumber == 'No'">
                    <h3><b>Emergency Phone Numbers</b></h3>
                    <table class="table table-hover center">
                        <thead>
                            <tr>
                            <td><b>Emergency Type</b></td>
                            <td><b>Phone Number</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr v-for="emergency of emergencies" v-bind:key="emergency.Number">
                                <td>{{ emergency.Type }}</td>
                                <td>{{ emergency.Number }}</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
                <div v-if="country.OnlyNumber == 'Yes'">
                    <h3>The only emergency phone number for this country is 112.</h3>
                </div>
            </div>
        )
    }

}