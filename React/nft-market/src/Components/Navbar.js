import React, { Component } from "react";
import styled from "styled-components";
import Data from "../Components/data";

const Sidebar = styled.div`

  background: #BEBDBD;
  border: 3px solid black;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blockchain = styled.div`

border: 1px red solid;

  .bcOpt{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`

const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  border:1px blue solid ;

  h4{
    font-size: 20px;
    font-weight: bold;
  }
  div{
    display: flex;
    flex-direction: row;
  }

`
const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  border: 1px solid red;

  .priceButton{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const Type = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  border: 1px solid blue;
`

const Option = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: left;

  border: 1px solid red;

  .opForm{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .check{
    display: flex;
    flex-direction: row;
  }
`

const Collections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  border: 1px solid blue;

  .colOpt{
    margin: 10px 0 10px 0;
  }

  .nft_list_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: scroll;
    overflow-x: hidden; 
    height: 270px;
  }

  .card_container{
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    width: 100%;
  }

  .card_container img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

export class Navbar extends Component {
  render() {
    return (
      <Sidebar>
        <Menu>
          <Blockchain>
            <h4>Blockchain</h4>
            <div className="bcOpt">
                <a>Etherium</a>
                <a>Ropsten</a>
                <a>Rinkeby</a>
                <a>Kovan</a>
            </div>
          </Blockchain>
          <Status>
            <h4>Status</h4>
            <div className="stOpt">
              <button type="button">all</button>
              <button type="button">Buy now</button>   
            </div>
          </Status>
          <Price>
            <h4>Price</h4>
            <div className="prOpt">
              <div className="priceButton">
                  <input type="text" placeholder="Min"/>
                  <h3>to</h3>
                  <input type="text" placeholder="Max"/>
              </div>
            </div>
          </Price>
          <Type>
            <h4>Type</h4>
            <div className="typOpt">
              <button>all</button>
              <button>multiple addition</button>
              <button>Single addition</button>
            </div>
          </Type>
          <Option>
            <h4>Options</h4>
            <div className="opOpt">
              <form className="opForm">
                <div className="check">
                <input type="checkbox" id="" name="" value=""/>
                <label for="">Verified only</label>
                </div>
                <div className="check">
                <input type="checkbox" id="" name="" value=""/>
                <label for="">Show lazy minted Item</label>
                </div>
                <div className="check">
                <input type="checkbox" id="" name="" value=""/>
                <label for="">Show NSFW</label>
                </div>

              </form>
            </div>
          </Option>
          <Collections>
            <h4>Collections</h4>
            <div className="colOpt">
              <input type="text" placeholder="Search"/>
              <div className="nft_list_container">
                {Data.map(({image, name_nft, price_nft}) => (
                <div className="card_container">
                        <img src={image}/>
                        <h3>{name_nft}</h3>
                        <div className="price">
                            <p>Price</p>
                            <h4>{price_nft}</h4>
                        </div>
                </div>
                ))}
              </div>
              </div>
          </Collections>
        </Menu>
      </Sidebar>
    );
  }
}

export default Navbar;
