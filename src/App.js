import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={this.props.car} />
        <AddedFeatures car={this.props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={this.props.additionalFeatures} />
        <Total car={this.props.car} additionalPrice={this.props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { })(App);
