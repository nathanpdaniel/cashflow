import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {Redirect} from 'react-router-dom'
import {Container, Nav, Content, Footer, Btn, Form, Input, BottomNav, Tab, HeadingOne, HeadingTwo, HeadingThree, Img} from './dashboard';



export class Dashboard extends Component {
  state = {
    title: 'Congratulations',
    heading: 'Everythings running smoothly in your business',
    balance : '$17,000',
    redirectToDashboardPage: false

  }
  addCustomer = () => {
    this.setState({redirectToDashboardPage:true})
  }
  listCustomers = () => {
    console.log('list customers')
  }
  render() {
    if(this.state.redirectToDashboardPage){
      return <Redirect to={`dashboard`} />
}
    return (
      <div>
          <Container>
            <Nav>
              <img src="/images/usbankcashflowlogo.png" style={{ width: 300, height: 100 }} />
            </Nav>
            <Content>
                <BottomNav>
                  <Tab onClick={this.listCustomers}>Customers</Tab>
                  <Tab onClick={this.addCustomer}>Add Customer</Tab>
                </BottomNav>
                <HeadingOne>{this.state.title}</HeadingOne>
                <HeadingTwo>{this.state.heading}</HeadingTwo>
                <Img>
                    <img src="/images/greenicon.png" style={{ width: 300, height: 220, margin: 0  }} />
                </Img> 
                <HeadingThree>{this.state.balance}</HeadingThree>
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