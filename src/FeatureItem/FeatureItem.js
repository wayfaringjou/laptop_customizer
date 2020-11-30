import React, { Component} from 'react';
import FeatureItemOptions from '../FeatureItemOptions/FeatureItemOptions';
import './FeatureItem.css';

class FeatureItem extends Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        <FeatureItemOptions 
          selected={this.props.selected}
          feature={this.props.feature}
          features={this.props.features}
          USCurrencyFormat={this.props.USCurrencyFormat}
          onSelectionChange={this.props.onSelectionChange}
        />
      </fieldset>
    );
  };
}

export default FeatureItem;