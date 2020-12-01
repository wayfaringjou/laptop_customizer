import React, { Component } from 'react';
import Summary from './Summary/Summary';
import './App.css';
import Features from './Features/Features';
import FEATURES from './FEATURES'


class App extends Component {
  static defaultProps = {
    // This object will allow us to
    // easily convert numbers into US dollar values
    USCurrencyFormat : new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  };

  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Features 
            selected={this.state.selected}
            features={FEATURES}
            USCurrencyFormat={this.props.USCurrencyFormat}
            onSelectionChange={this.updateFeature}
          /> 
          
          <Summary
            selected={this.state.selected} 
            USCurrencyFormat={this.props.USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;
