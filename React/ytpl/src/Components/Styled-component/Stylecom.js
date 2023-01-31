import React, { Component } from 'react'
import { Title, TitleWrapper } from './Style.css'
import styled, { css } from "styled-components"
  
  const Button = styled.button`
      font-size: 1rem;
      padding: 1rem 2rem;
      border: 1px solid black;
      border-radius: 3px;
      margin: 5px;
      background-color: white;
      color:green;
      margin-top: 10px; 
  
      ${({primary})=> primary && 
      css`
      background-color: green;
      color: white;
      `}
      
      ${({secondary})=> secondary && 
      css`
      background-color: white;
      color: green;
      border: 2px solid pink;
      background: pink;
      `}
  `
  
  const BigButton = styled(Button)`
    font-size:3rem;
  
    &:hover{
      background-color:white;
      color:black;
    }
  
    li{
      color: red;
    }
  `

const Link = styled.a.attrs({
  target: "_blank",
})`
  color :red;
`


const ReverseButton = (props) => {
  console.log("🚀 ~ file: Stylecom.js:7 ~ ReverseButton ~ props", props)
  return (
    <Button {...props} children={props.children.split("").reverse()}/>
  )
}

export class Stylecom extends Component {
  render() {
    return (
      <>
      <TitleWrapper>
        <Title>Stylecom</Title>
      </TitleWrapper>
      
      <div>
        <Button primary>Primary Button</Button>
        <Button secondary>Secondary Button</Button>  
        <BigButton primary>Primary Button</BigButton>
        <BigButton secondary>Secondary Button</BigButton>
        <Button primary as="a" href="https://www.google.com" >Google link</Button>      
        <BigButton as={ReverseButton}>Reverse Button</BigButton>

        <BigButton>
          <Link>
            <a href="https://www.google.com" >This is Link</a>
          </Link>
        </BigButton>
      </div>
      </>
    )
  }
}

export default Stylecom