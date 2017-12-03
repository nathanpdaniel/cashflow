import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
height:800px;
`

export const Nav = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  background-color:white;
  border:2px solid red;
  flex:1;
`

export const Content = styled.div`
  border:2px solid skyblue;
  width:100%;
  flex:5;
`

export const Footer = styled.div`
  border:2px solid purple;
  width:100%;
  flex:1;
`

export const Btn = styled.button`
  display:flex;
  border: 1px solid skyblue;
  padding:10px;
  `
 
 export const Tab = styled.div `
    display:inline-block;
    font-size:22px;
    margin:18px;
    cursor:pointer;
    position:relative;
    top:-10px;
    a{
        text-decoration:none;
        outline:none;
    }
 
`

export const BottomNav = styled.div`
    background-color: #3498db;
    border:2px solid gray;
    width:100%;
    height:30px;
`

export const HeadingOne= styled.div`
    display:flex;
    aligin-items:center;
    justify-content:center;
    flex-decoration:row;
    font-size:50px;
    margin: 20px;
`

export const HeadingTwo= styled.div`
display:flex;
aligin-items:center;
justify-content:center;
flex-decoration:row;
font-size:30px;
`



export const Input =  styled.div`

`
