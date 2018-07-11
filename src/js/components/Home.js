import React from 'react';

import axios from 'axios';

import Country from './Country';

export default class Home extends React.Component {

    constructor() {

        super();
        this.state = {
            country: null,
            emergencies: []
        };

    }

    componentDidMount() {

        axios.get('http://ip-api.com/json')
            .then(response => {

                let countryName = response.data.country;

                console.log(countryName);

                axios.get('http://83.212.115.201/api.php/country/' + countryName)
                    .then(response => {

                        console.log(response.data);
                        this.setState({country: response.data});

                    });

                axios.get('http://83.212.115.201/api.php/country/emergency/' + countryName)
                    .then(response => {

                        console.log(response.data);
                        this.setState({emergencies: response.data});

                    });

            });

    }

    render() {

        console.log('home');

        return(
            <div class="container">
                <h1>Home</h1>
                <Country country={this.state.country} emergencies={this.state.emergencies}/>
            </div>
        )
    }

}