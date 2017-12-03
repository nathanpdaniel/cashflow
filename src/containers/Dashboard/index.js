import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {Container, Nav, Content, Footer, Btn, Form, Input, BottomNav, Tab, HeadingOne, HeadingTwo} from './dashboard';



export class Dashboard extends Component {
  state = {
    title: 'Congratulations',
    heading: 'Everythings running smoothly in your business',
    balance : '$17,000'
  }
  render() {
    return (
      <div>
          <Container>
            <Nav>
              <img src="/images/usbankcashflowlogo.png" style={{ width: 300, height: 100 }} />
            </Nav>
            <Content>
                <BottomNav>
                  <Tab>Customers</Tab>
                  <Tab>Add Customer</Tab>
                </BottomNav>
                <HeadingOne>{this.state.title}</HeadingOne>
                <HeadingTwo>{this.state.heading}</HeadingTwo>
                <h3>{this.state.balance}</h3>
            </Content>  
            <Footer>

            </Footer>  
          </Container>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}


export default connect(mapStateToProps)(Dashboard);