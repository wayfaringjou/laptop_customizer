import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './FeatureItemOptions.css';

class FeatureItemOptions extends Component{
  render() {
    const options = this.props.features[this.props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
        <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={item.name === this.props.selected[this.props.feature].name}
              onChange={e => this.props.onSelectionChange(this.props.feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });
      return (
        <div className="feature__option__list">
          {options}
        </div>
      );
  }
}

export default FeatureItemOptions;