import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, toggleDisplay } from './actions/insuranceActions';

import InsuranceCard from './components/insuranceCard';
import './App.css';


class App extends Component {

  componentWillMount() {
    this.fetchData();
  }

  fetchData = (event) => {
    this.props.fetchData();
  }

  toggleDisplay() {
    this.props.toggleDisplay();
  }

  render() {
    const props = this.props;
    const insurances = props.insurances.insurances;
    let cards;

    if (insurances && props.limitedRange) {
      cards = insurances.slice(0, 8);
    } else if (insurances && !props.limitedRange) {
      cards = insurances;
    } else {
      cards = [];
    }

    return (
      <div className="App">
        <header className="header">
          <span><b>Moderna</b></span>
        </header>
        <div className="wrapper">
          <div className="cardsWrapper">
            {cards && cards.map((card, i) => {
              return (
                <InsuranceCard data={card} key={i} />
              )
            })
            }
          </div>
          <span onClick={this.props.toggleDisplay} className="toggleDisplay">{props.limitedRange ? 'Visa mer' : 'Visa färre'}</span>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  toggleDisplay: () => dispatch(toggleDisplay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
