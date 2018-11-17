/**
 * @author George Kamtziridis <georgekam96@gmail.com>
 */

import React from 'react';

import axios from 'axios';

import Country from './Country';

/**
 * The constructor initializes component's state and binds
 * getCountry's context to component's context.
 * @class Search
 * @classdesc The react component which makes up the Search page.
 * @extends React.Component
 */
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

    /**
	 * Fetching all the available countries
     * and constructing the corresponding
     * options.
     * @memberOf Search
     * @instance
     */
    componentDidMount() {

        axios.get('http://gkamtzir.webpages.auth.gr/api.php/country')
            .then(response => {

                let countries = response.data;

                countries.sort(function(a, b) {

                    if (a.Name < b.Name) {

                        return -1;

                    } else if (a.Name > b.Name) {

                        return 1;

                    } else {

                        return 0;

                    }

                });

                let countryOptionElements = countries.map(country => {

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

    /**
	 * Fetching selected country's emergency
     * phone numbers.
     * @param {Object} event - The event that triggered the listener.
     * @memberOf Search
     * @instance
     */
    getCountry(event) {

        let countryName = event.target.value;

        axios.get('http://gkamtzir.webpages.auth.gr/api.php/country/' + countryName)
            .then(response => {

                this.setState({country: response.data});
                this.setState({countryName: response.data.Name});

            });

        axios.get('http://gkamtzir.webpages.auth.gr/api.php/country/emergency/' + countryName)
            .then(response => {

                this.setState({emergencies: response.data});

            });

    }

    /**
	 * Render the component's view.
     * @memberOf Search
     * @instance
     */
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