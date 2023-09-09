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

const Card = () => {
  return (
    <Container>
      <Image src="https://i.ytimg.com/vi/mZQH8CPQ-wo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfAQkZobpHNdCTehIhLbef0N9thA"/>
      <Details>
        <ChannelImage/>
      </Details>
    </Container>
  )
}

export default Card