import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
display:flex;
flex-direction:column;
height:800px;
`

const Nav = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  background-color:white;
  border:2px solid red;
  flex:1;
`

const Content = styled.div`
  border:2px solid skyblue;
  width:100%;
  flex:5;
`

const Footer = styled.div`
  border:2px solid purple;
  width:100%;
  flex:1;
`

const Btn = styled.button`
  display:flex;
  border: 1px solid skyblue;
  padding:10px;
  `
 
 const Tab = styled.div `
display:inline-block;
font-size:22px;
margin:20px;
cursor:pointer;
    a{
        text-decoration:none;
        outline:none;
        color:#00A6A6;   
    }
        a:hover{
        color:#F08700;
    }
`



export class Dashboard extends Component {
  render() {
    return (
      <div>
          <Container>
            <Nav>
              <img src="/images/usbankcashflowlogo.png" style={{ width: 300, height: 100 }} />
                    <Tab className="tab"><Link to={`/signup`}>Sign Up</Link></Tab>
                    <Tab className="tab"><Link to={`/login`}>Log In</Link></Tab>
            </Nav>
            <Content>
              
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