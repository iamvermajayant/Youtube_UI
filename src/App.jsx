import styled from "styled-components";
import Menu from './Components/Menu';
import Navbar from "./Components/Navbar";

import './App.css';



const Container = styled.div`
  display : flex;

`

const Main = styled.div`
  flex : 7;
  background-color : #ddd;

`

const Wrapper = styled.div`


`

function App() {
 

  return (
    <Container>
     <Menu/>
      <Main>
        <Navbar/>
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
  )
}

export default App
