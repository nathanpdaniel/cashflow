import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';



const Box = styled.div`
display:flex;
background-color:#ecf0f1;
margin-top:30px;
color:midnightblue;
width:200px;
border: 5px solid gray;
margin-left:28em;
margin-top:8em;
padding:5em;
border-radius:5px;
flex-direction:column;
label, input[type=text] {
    display: inline-block;
}
`

const Btn = styled.button`
font-family: 'Lato';
border-radius: 4px;
font-size: 14px;
border:4px solid black;
justify-content: center;
background-color:#27ae60;
margin-top: 2em;
a{
    text-decoration:none;
}
`


const Input = styled.input`
display:flex;
height:20px;
margin-top:10px;
`

const Title = styled.h1`
color: green;
font-family: 'Lato';
width:300px;
margin-right:100px;
`
const Button = styled.div`
display:inline-flex;
justify-content:center;
width:200px;
height:30px;
background:#7f8c8d;
margin-top:13px;
`
const Text = styled.h1`
font-size:10px;
` 

class dashboardForm extends Component {
        state = {
            newCustomer: {
                firstName: '',
                lastName: '',
                state: '',
                city: '',
        },
        redirectToDashboardPage: false,
    }
        handleSubmit = async (event) => {
            event.preventDefault()
            console.log('submitted')
            // const res = await axios.post(``,{})
            // this.setState({redirectToDashboardPage: true, newCustomerId: res.data.id});
        }
    render() {
        if(this.state.redirectToDashboardPage){
                return <Redirect to={`dashboard/dashboardForm`} />
        }
            return (
              
              <Box onSubmit={this.handleSubmit}>
              <Title>Sign Up Now</Title>
              <div>
                  <label htmlFor="firstName">First: </label>
                  <Input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName}/>
                </div>
              <div>
                  <label htmlFor="lastName">Last: </label>
                  <Input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName}/>
                </div>
                <div>
                  <label htmlFor="state">State: </label>
                  <Input onChange={this.handleChange} type="text" name="state" value={this.state.state}/>
                </div>
                <div>
                  <label htmlFor="city">City: </label>
                  <Input onChange={this.handleChange} type="text" name="city" value={this.state.city}/>
                </div>
                <Btn onClick={this.handleSubmit}>Submit</Btn>
                <Btn>
                    <Link to="/dashboard">Home</Link>
                </Btn>
                
              </Box>
            )
        }
    }



const mapStateToProps = (state) => {
    return {
    }
  }
  
  
  export default connect(mapStateToProps)(dashboardForm);
