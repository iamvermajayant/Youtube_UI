import { styled } from "styled-components";
import Jaytube from "../Images/utube.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Container = styled.div`
    flex : 1;
    background-color: #202020;
    color : White;
    height : 100vh;
    font-size : 14px;
`;

const Wrapper = styled.div`
    padding : 18px 28px;
`;

const Logo = styled.div`
    display : flex;
    align-items : center;
    font-weight : bold;
    margin-bottom : 25px;
`;

const Img = styled.img`
    height : 40px;
    margin-left : -10px;
`;


const Item = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
    cursor : pointer;
    padding : 7.5px 0px;
`;


const Hr = styled.div `
    margin : 15px 0px;
    border : 0.5px solid #373737;
`;


const Menu = () => {
  return (
    <Container>
        <Wrapper>
          <Logo>
            <Img src={Jaytube}/>
            JayTube
          </Logo>
          <Item>
            <HomeIcon/>
            Home
          </Item>
          <Item>
            <ExploreIcon/>
            Explore Icon
          </Item>
          <Item>
            <SubscriptionsIcon/>
            Subscriptions
          </Item>
          <Hr/>
          <Item>
            <LibraryBooksIcon/>
            Library
          </Item>
          <Item>
            <HistoryIcon/>
            History
          </Item>
          <Hr/>
          <Item>
            <LibraryMusicOutlinedIcon/>
            Music
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon/>
            Sports
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon/>
            Gaming
          </Item>
          <Item>
            <LocalMoviesOutlinedIcon/>
            Movies
          </Item>
          <Item>
            <NewspaperOutlinedIcon/>
            News
          </Item>
          <Item>
            <LiveTvOutlinedIcon/>
            Live
          </Item>
          <Hr/>
          <Item>
            <SettingsOutlinedIcon/>
            Settings
          </Item>
          <Item>
            <FlagOutlinedIcon/>
            Report
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon/>
            Help
          </Item>
          <Item>
            <LightModeOutlinedIcon/>
            Light Mode
          </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu;