import styled from "styled-components";

const Container = styled.div``;

const NewComment = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
`;
const Avatar = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
`

const Input = styled.input`
    border : none;
    background-color : transparent;
    border-bottom : 1px solid ${({theme}) => theme.textSoft};
    outline : none;
    padding : 5px;
    width : 100%;
    color : ${({theme}) => theme.textSoft};

`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.googleusercontent.com/ytc/AOPolaSAz3nhUeo5D7ps5MvLjQsCeqdLlB7Yz-MotQLeJA=s176-c-k-c0x00ffffff-no-rj" />
        <Input placeholder="Add a comment..." />
      </NewComment>
    </Container>
  );
};

export default Comments;
