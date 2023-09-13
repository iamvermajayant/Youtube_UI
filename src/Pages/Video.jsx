import { ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size : 18px;
  font-weight : 400;
  margin-top : 20px;
  margin-bottom : 10px;
  color : ${({theme}) => theme.text};
`;

const Details = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-between;

`;

const Info = styled.span`
  color : ${({theme}) => theme.textSoft};
`;

const Buttons = styled.div`
  display : flex;
  color : ${({theme}) => theme.text};
  gap : 20px;

`;

const Button = styled.div`
  display : flex;
  align-items : center;
  gap : 5px;
`;

const Channel = styled.div`
  display : flex;
  justify-content : space-between;

`;

const ChannelInfo = styled.div`

`;

const Subscribe = styled.button`

`;

const Image = styled.img`

`;
const ChannelDetail = styled.div`

`;
const ChannelName = styled.span`

`;
const ChannelCounter = styled.span`

`;
const Description = styled.p`

`;

const Hr = styled.hr`
  margin : 15px 0px;
  border : 0.5px solid ${({theme}) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
      <VideoWrapper>
        <iframe
          width="100%"
          height="720"
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
        <Buttons>
          <Button>
            <ThumbUpAltOutlined/> 123
          </Button>
          <Button><ThumbDownAltOutlined/>Dislike</Button>
          <Button><ReplyOutlinedIcon/>Share</Button>
          <Button><AddTaskOutlinedIcon/>Save</Button>
        </Buttons>
      </Details>
      <Hr/>
      <Channel>
        <ChannelInfo>
        
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
      </Channel>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
