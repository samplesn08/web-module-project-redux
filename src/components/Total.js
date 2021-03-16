import React from 'react';
import { connect } from 'react-redux';

const Total = () => {
  return (
    <div className="content">
      <h4>Total Amount: ${this.props.car.price + this.props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total);
