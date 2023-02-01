import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Screen = styled.div`
  display: flex;
  flex-direction: row;
  .sticky {
    position: sticky;
    top: 0;
    left: 0;
    padding: 5px;
    background-color: #cae8ca;
    border: 2px solid #4caf50;
    width: 500px;
    height: 900px;
  }
`;

function App() {
  const [btnClick, setBtnClick] = useState(true);
  return (
    <div className="App">
      <Container>
        <Search setBtnClick={setBtnClick} btnClick={btnClick} />
        <Screen>
          {btnClick && (
            <div className="sticky">
              <Navbar />
            </div>
          )}
          <Card />
        </Screen>
      </Container>
    </div>
  );
}

export default App;
