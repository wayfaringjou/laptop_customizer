import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import './Features.css'

class Features extends Component {
  render () {
    const features = Object.keys(this.props.features).map((feature, idx) => <FeatureItem 
    feature={feature} 
    key={feature + '-' + idx}
    selected={this.props.selected}
    features={this.props.features}
    USCurrencyFormat={this.props.USCurrencyFormat}
    onSelectionChange={this.props.onSelectionChange}
    />);
    return (
      <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
      </form>
    );
  }
}

export default Features;