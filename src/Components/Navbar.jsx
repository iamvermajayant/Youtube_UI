import { styled } from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
  position : sticky;
  top : 0;
  background-color : ${({theme}) => theme.bgLighter};
  height : 56px;
`;

const Wrapper = styled.div`
  display : flex;
  align-items : center;
  height : 100%;
  padding : 0px 20px;
  justify-content : flex-end;
`;

const Search = styled.div`
  left : 0px;
  right : 0px;
  display : flex;
  justify-content: space-between;
  align-items : center;
  margin : auto; 
  position : absolute;
  width : 40%;
  padding : 5px;
  border : 1px solid #CCC;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
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
`;

const Input = styled.input`
  border : none;  
  background-color : transparent;
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