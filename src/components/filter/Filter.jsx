import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <fieldset className={css.filter}>
        <legend className={css.legend}>Quickly find the right contact</legend>
        <label className={css.label}>
          Find contacts by name
          <input
            className={css.input}
            type="text"
            name="filter"
            value={this.props.value}
            onChange={this.props.handleFilter}
          />
        </label>
      </fieldset>
    );
  }
}
