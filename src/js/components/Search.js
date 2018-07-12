import React from 'react';

import axios from 'axios';

import Country from './Country';

export default class Search extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            countryOptionElements: null,
            country: null,
            emergencies: null,
            countryName: ''
        };

        this.getCountry = this.getCountry.bind(this);

    }

    componentDidMount() {

        axios.get('http://83.212.115.201/api.php/country')
            .then(response => {

                let countryOptionElements = response.data.map(country => {

                    return (
                        <option value={country.Name} key={country.Name}>{country.Name}</option>
                    )

                });

                countryOptionElements.unshift(<option value="" key="0" disabled>Choose a country</option>);

                this.setState({
                    countryOptionElements
                });

            });

    }

    getCountry(event) {

        let countryName = event.target.value;

        axios.get('http://83.212.115.201/api.php/country/' + countryName)
            .then(response => {

                this.setState({country: response.data});
                this.setState({countryName: response.data.Name});

            });

        axios.get('http://83.212.115.201/api.php/country/emergency/' + countryName)
            .then(response => {

                this.setState({emergencies: response.data});

            });

    }

    render() {

        return(
            <div class="container">

                <h1>SEARCH</h1>

                <h4>Find any emergency phone immediately.</h4>

                <br />

                <div class="form-group">
                    <div class="row">
                    <div class="col-md-3">
                        <label for="country">Country:</label>
                    </div>
                    <div class="col-md-6">
                        <select class="custom-select country-select" value={this.state.countryName} onChange={this.getCountry}>
                            {this.state.countryOptionElements}
                        </select>
                    </div>
                    </div>
                </div>

                <hr />

               <Country country={this.state.country} emergencies={this.state.emergencies}/>

            </div>
        )
    }

}