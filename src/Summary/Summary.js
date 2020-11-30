import React, { Component } from 'react';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import SummaryOption from '../SummaryOption/SummaryOption';
import './Summary.css';

class Summary extends Component {
  render() {
    const summaryOptionList = Object.keys(this.props.selected).map((feature, idx) => {
      return (
        <SummaryOption 
          feature={feature}
          key={feature + '-' + idx}
          selectedOption={this.props.selected[feature]}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      );
    });
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <div className="summary__list">
          {summaryOptionList}
        </div>
      <SummaryTotal 
              selected={this.props.selected}
              USCurrencyFormat={this.props.USCurrencyFormat}
      />  
      </section>
    );
  }
}

export default Summary;