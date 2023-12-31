import { ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import styled from "styled-components";
import Comments from "../Components/Comments";
import Card from '../Components/Card';


const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
`;



const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ChannelInfo = styled.div`
  display : flex;
  gap : 20px;
`;

const Subscribe = styled.button`
  background-color : #cc1a00;
  font-weight : 500;
  color : white;
  border : none;
  border-radius : 3px;
  height : max-content;
  padding : 10px 20px;
  cursor : pointer;
`;

const Image = styled.img`
  width : 50px;
  height : 50px;
  border-radius : 50%;
`;
const ChannelDetail = styled.div`
  display : flex;
  flex-direction : column;
  color : ${({theme}) => theme.text};
`;
const ChannelName = styled.span`
  font-weight : 400;

`;
const ChannelCounter = styled.span`
  margin-top : 5px;
  margin-bottom : 20px;
  color : ${({theme}) => theme.textSoft};
  font-size : 12px;
`;
const Description = styled.p`
  font-size : 14px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
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
            style={{borderRadius : "15px"}}
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
              <ThumbUpAltOutlined /> 123
            </Button>
            <Button>
              <ThumbDownAltOutlined />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.googleusercontent.com/ytc/AOPolaSAz3nhUeo5D7ps5MvLjQsCeqdLlB7Yz-MotQLeJA=s176-c-k-c0x00ffffff-no-rj"></Image>
          </ChannelInfo>
          <ChannelDetail>
            <ChannelName>A.P Dhillon</ChannelName>
            <ChannelCounter>200k Subscribers</ChannelCounter>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maxime, dolores.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maxime, dolores.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime, dolores.Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Maxime, dolores.
            </Description>
          </ChannelDetail>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;
