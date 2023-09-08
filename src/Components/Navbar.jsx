import { styled } from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
  position : sticky;
  top : 0;
  background-color : ${({theme}) => theme.bgLighter}
  height : 56px;
`;

const Wrapper = styled.div`
  display : flex;
  align-items : center;
`;

const Search = styled.div`
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
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Serach Here"/>
          <SearchOutlinedIcon/>
        </Search>
        <Button>
              <AccountCircleOutlinedIcon/>
                SIGN IN
            </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar;