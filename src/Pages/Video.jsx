import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1``;

const Details = styled.div``;

const Info = styled.span``;

const Buttons = styled.div``;

const Button = styled.div``;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
      <VideoWrapper>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mZQH8CPQ-wo?si=V6uZw0Ah9ktp3EX7"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          frameBorder="0"
        ></iframe>
      </VideoWrapper>
      <Title>With You</Title>
      <Details>
        <Info>660,998 Views ● 1 Day ago</Info>
      </Details>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
