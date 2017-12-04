import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import withStyles from 'material-ui/styles';
import { Grid, Paper, Button } from 'material-ui';
// import {Container, Nav, Content, Footer, Btn, Form, Input, BottomNav, Tab, HeadingOne, HeadingTwo, HeadingThree, Img} from './dashboard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Dashboard extends Component {
  state = {
    title: 'Congratulations',
    heading: 'Everything is running smoothly in your business',
    balance : '$17,149.25'
  }
  onCustomer = () => {
    browserHistory.push('/customers');
  }
  onSupplier = () => {
    browserHistory.push('/suppliers');
  }
  render() {
    return (
      <div>
        <Grid container={true} spacing={24} style={{ width: 800, margin: '0 auto' }}>
          <Grid item xs={12}>
            <img src="/images/usbankcashflowlogo.png" height={100} />
          </Grid>
          <Paper style={{ width: 800, padding: 24 }}>
            <Grid item xs={12}>
              <div style={{ fontSize: 32, textAlign: 'center' }}>{this.state.title}</div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ fontSize: 24, textAlign: 'center' }}>{this.state.heading}</div>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <img src="/images/greenicon.png" />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 12 }}>Current Balance:</div>
              <div style={{ fontSize: 54, flexAlign: 'middle' }}>{this.state.balance}</div>
              <div style={{ fontSize: 12 }}>Threshold: $10,000</div>
            </Grid>
          </Paper>
          <Grid item xs={6}>
            <Button raised style={{ padding: 24, margin: 24 }} onClick={this.onCustomer}>Customers</Button>
            <Button raised style={{ padding: 24 }} onClick={this.onSupplier}>Suppliers</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}


export default Dashboard;