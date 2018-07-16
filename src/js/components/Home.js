/**
 * @author George Kamtziridis <georgekam96@gmail.com>
 */

import React from 'react';

import axios from 'axios';

import Country from './Country';

/**
 * The constructor initializes component's state.
 * @class Home
 * @classdesc The react component which makes up the Home page.
 * @extends React.Component
 */
export default class Home extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            country: null,
            emergencies: null
        };

    }

    /**
	 * Fetching user's country based on his/her
     * IP and then fetching the emergency phone
     * numbers for that particular country.
     * @memberOf Home
     * @instance
     */
    componentDidMount() {

        axios.get('http://ip-api.com/json')
            .then(response => {

                let countryName = response.data.country;

                axios.get('http://83.212.115.201/api.php/country/' + countryName)
                    .then(response => {

                        this.setState({country: response.data});

                    });

                axios.get('http://83.212.115.201/api.php/country/emergency/' + countryName)
                    .then(response => {

                        this.setState({emergencies: response.data});

                    });

            });

    }

    /**
	 * Render the component's view.
     * @memberOf Home
     * @instance
     */
    render() {

        return(
            <div class="container">
                <h1>What is your emergency?</h1>
                <Country country={this.state.country} emergencies={this.state.emergencies}/>
            </div>
        )
    }

}