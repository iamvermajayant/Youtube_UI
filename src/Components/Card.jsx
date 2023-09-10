import styled from "styled-components";


const Container = styled.div`
  width : 360px;
  margin-bottom : 45px;
  cursor : pointer;
`;

const Image = styled.img`
  width : 100%;
  height :202px;
  background-color : #999;
`;

const Details = styled.div`
  display :flex;
  margin-top : 16px;
  gap : 12px;
`;

const ChannelImage = styled.img`
  width : 36px;
  height : 36px;
  border-radius : 50%;
  background-color : #999;
`;

const Texts = styled.div`

`;
 
const Title =styled.h1`
  font-size : 16px;
  font-weight : 500;
  color : ${({theme}) => theme.text};
`;

const ChannelName = styled.h2`
  font-size : 14px;
  font-weight : 400;
  color : ${({theme}) => theme.textSoft};
  margin : 10px 0px;
`; 

const Info = styled.div`

`;

const Card = () => {
  return (
    <Container>
      <Image src="https://i.ytimg.com/vi/mZQH8CPQ-wo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfAQkZobpHNdCTehIhLbef0N9thA"/>
      <Details>
        <ChannelImage/>
        <Texts>
          <Title>With You</Title>
          <ChannelName>A.P Dhillon</ChannelName>
          <Info>660,998 Views ● 1 Day ago</Info>
        </Texts>
      </Details>
    </Container>
  )
}

export default Card