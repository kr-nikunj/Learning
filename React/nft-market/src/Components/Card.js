import React, { Component } from 'react'
import styled, { css } from "styled-components"
import nft from "../Images/nft1.jpg"

const data = [
    {
        image: nft,
        source_nft: 'nft 1',
        name_nft: 'nft #0x1234 ',
        price_nft: '0,0012 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 2',
        name_nft: 'nft #0x2345 ',
        price_nft: '0,0002 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 3',
        name_nft: 'nft #0x3456 ',
        price_nft: '0,0009 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 4',
        name_nft: 'nft #0x4567 ',
        price_nft: '0,0001 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 5',
        name_nft: 'nft #0x6734 ',
        price_nft: '0,0003 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 6',
        name_nft: 'nft #0x2312 ',
        price_nft: '0,0012 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 7',
        name_nft: 'nft #0x4532 ',
        price_nft: '0,0009 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 8',
        name_nft: 'nft #0x7887 ',
        price_nft: '0,0089 ETH'
    },
    {
        image: nft,
        source_nft: 'nft 9',
        name_nft: 'nft #0x2321 ',
        price_nft: '0,0021 ETH'
    },
   
]


const Cardwrapper = styled.div`
    display: grid;
    
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 2fr min-content;
    justify-content:space-between ;
    gap: 30px 30px;
    overflow-x: hidden;  
    padding: 10PX;
    `
  const Cardcom = styled.div`
    grid-gap: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
  }

  h5{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri;
    font-size: 1rem;
    padding: 0 0 0 1rem;
    margin: 0;
    color: gray;
  }

  h3{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri;
    font-size: 1.2rem;
    padding: 0 0 0 1rem;
    margin: 0 0 1rem 0;
  }
  `
  const Image = styled.img`
    width: 100%;
    border-radius: 20px;
    `

  const Container = styled.div`
    width: 100%;
`

    const Price = styled.div`
        background: #f6f689;
        padding:0px 0px 5px 15px;
        margin:5px 5px 5px 5px;
        border-radius: 10px;
        font-size: 1rem;

        p{
            color:gray;
            font-size: 1rem;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding-top: 5px;
            margin: 0;
        }

        h4{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri;
            margin: 4px 0 0 0;
        }
    `



export class Card extends Component {
  static propTypes = {}

  render() {
    return (
    <Container>
      <Cardwrapper>
        {data.map(({image, source_nft, name_nft, price_nft}) => (
            <Cardcom>
                <Image src={image}/>
                <h5>{source_nft}</h5>
                <h3>{name_nft}</h3>
                <Price>
                    <p>Price</p>
                    <h4>{price_nft}</h4>
                </Price>
            </Cardcom>
        ))}
      </Cardwrapper>
    </Container>
    )
  }
}

export default Card