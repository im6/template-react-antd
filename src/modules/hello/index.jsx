import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';

const Hello = ({ click }) => <Card>
  Hello World
  <br />
  <br />
  <Button onClick={click}>
    click
  </Button>
</Card>;

Hello.propTypes = {
  click: PropTypes.func.isRequired,
};


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => {
      let actcr = createAction('hello/get');
      dispatch(actcr());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
