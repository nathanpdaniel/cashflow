import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

export class Container extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{height:'100%'}}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Container);