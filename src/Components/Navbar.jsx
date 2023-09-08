import { styled } from "styled-components";

const Container = styled.div`
`;

const Wrapper = styled.div`
`;

const Button = styled.button`
    padding : 5px 15px;
    background-color : transparent;
    border : 1px solid #3ea6ff;
    color : #3ea6ff;
    border-radius : 3px;
    font-weight : 300;
    cursor : pointer;
    display : flex;
    align-items : center;
    gap : 5px;
    margin-top : 0.5rem;
`;

const Input = styled.input`
`;

const Navbar = () => {
  return (
    <Container>Navbar</Container>
  )
}

export default Navbar;