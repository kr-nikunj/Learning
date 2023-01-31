import React, { Component } from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  background: yellow;
  height: 800px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled.a``;

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", height: "100%", fontSize:"3rem"}}>
          <Sidebar>
            <Menu>
              <MenuItem>
                <select name="blockchain" id="bc">
                  <option value="Etherium">Etherium</option>
                  <option value="Solana">Solana</option>
                  <option value="Tezoz">Tezoz</option>
                  <option value="Immutablex">Immutable x</option>
                  <option value="polygon">polygon</option>
                </select>
              </MenuItem>
              <MenuItem>
                <select name="prize" id="prize">
                    <option value="Prize">Prize</option>
                    <option>
                        <div>
                            <form>
                                <input type="text"></input>
                                <p>To</p>
                                <input type="text"></input>
                            </form>
                        </div>
                    </option>
                </select>
              </MenuItem>
              <MenuItem> 
                <select>
                    
                </select>
              </MenuItem>
              <MenuItem> Examples</MenuItem>
            </Menu>
          </Sidebar>
          <main style={{ padding: 10 }}> Main content</main>
        </div>
      </div>
    );
  }
}

export default Navbar;
