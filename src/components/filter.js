import React from 'react';
import './filter.css';

export default class FilterForm extends React.Component {
    render() {

        return (
            <div className="filter-container">
                <form className="filter-menu align-left">
                    <div className="filter-group select">
                        <label className="filter-label display-block" htmlFor="groupby">Group By</label>
                        <select id="groupby" onChange={this.props.onChangeGroup}>
                            <option value="brand">Brand</option>
                            <option value="flavor">Flavor</option>
                        </select>
                    </div>

                    <div className="filter-city select">
                        <label className="filter-label display-block" htmlFor="location">City</label>
                        <select id="location" onChange={this.props.onChangeCity}>
                            {this.props.cities.map(function(option, index) {
                                let city=option.charAt(0).toUpperCase() + option.slice(1)
                                return (<option key={index} value={option}>{city}</option>)
                            })}
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}