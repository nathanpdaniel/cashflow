import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const Tab = styled.div `
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

class Dashboard extends Component {
    state = {
        

    }

    //get balance
    async getAccountBalance(){
        const {userId} = this.props.match.params;
        const res = await axios.get(`/api/users/${userId}`);
        this.setState({user: res.data})
    }
    async 
    render() {
        return (
            <div>
                <Tab>
                    
                </Tab>    
            </div>
        );
    }
}

export default Dashboard;