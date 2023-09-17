import styledEngineSc from "@mui/styled-engine-sc";
import styled from "styled-components";

const Container = styled.div`
  display : flex;
  justify-content : center; 
  align-items : center;
  height : calc(100vh - 56px);
  color : ${({theme}) => theme.text};
  flex-direction : column;
`;

const Wrapper = styled.div`
  display : flex;
  align-items : center;
  flex-direction : column;
  background-color : ${({theme}) => theme.bgLighter};
  border : 1px solid ${({theme}) => theme.soft};
  padding : 20px 50px;
  gap : 10px;

`;

const Title = styled.h1`
  font-size : 24px;
`;

const SubTitle = styled.h2`
  font-size : 20px;
  font-weight : 300;
`;

const Input = styled.input`
  border : 1px solid ${({theme}) => theme.soft};
  background-color : transparent;
  border-radius : 3px;
  padding : 10px;
  width : 100%;
`;

const Button = styled.button`
  border-radius : 3px;
  border : none;
  padding : 10px 20px;
  font-weight : 400;
  cursor : pointer;
  background-color : ${({theme}) => theme.soft};
  color : ${({theme}) => theme.textSoft};
`;

const More = styled.div`
  display : flex;
  font-size : 10px;
  
`;

const Links = styled.div`
  margin-left : 50px;

`;

const Link = styled.span`
  margin-left : 30px;
`;




const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to JayTube</SubTitle>
        <Input placeholder = "username"/>
        <Input type="password" placeholder = "password"/>
        <Button>Sign In</Button>
        <Title>Or</Title>
        <Input placeholder="username"/>
        <Input placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <Button>Sign Up</Button>      
        </Wrapper>
        <More>
          English(IN)
          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
          </Links>
        </More>
    </Container>
  )
}

export default SignIn