import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';

const Search_div = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    width: 100%;
    font-family: 'Times New Roman', Times, serif;
    
    button {
        height: 50px;
        width: 15%;
        font-size: 20px;
        font-weight: bold;
        border-radius:10px;
        background: yellow;
    }

    input {
        height: 45px;
        width: 80%;
        font-size: 20px;
        font-weight: bold;
        border-radius:10px;
        margin-left: 5px;
        
        ::placeholder {
            color: gray;
            opacity: 0.5; 
            padding-left: 40px;
        }
    }
        
    @media (max-width: 500px) {
        flex-direction: column;
        width: 100%;

        button {
            width: 100%;
            font-size: 15px;
            margin-left: 0px;
        }

        input {
            width: 100%;
            font-size: 15px;
            margin: 15px 50px 0px 0px;
        }
        
    }
    `


export class Search extends Component {
  render() {
    const { setBtnClick, btnClick} = this.props;
    return (
        <>
      <Search_div>
        <button onClick={() => setBtnClick(!btnClick)}>Filter</button>
        <input type="text" placeholder="Search"/>
      </Search_div>
        </>
    )
  }
}

export default Search