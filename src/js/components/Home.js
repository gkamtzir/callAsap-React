import React from 'react';

import axios from 'axios';

import Country from './Country';

export default class Home extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            country: null,
            emergencies: null
        };

    }

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

    render() {

        return(
            <div class="container">
                <h1>What is your emergency?</h1>
                <Country country={this.state.country} emergencies={this.state.emergencies}/>
            </div>
        )
    }

}