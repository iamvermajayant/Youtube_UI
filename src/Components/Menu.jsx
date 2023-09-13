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
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from "react-router-dom";

const Container = styled.div`
    flex : 1;
    background-color: ${({theme}) => theme.bgLighter};
    color : ${({theme})=> theme.text};
    height : 100vh;
    font-size : 14px;
    position : sticky; 
    top : 0;
    overflow-y : scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
      height : 5px;
    }
    &::-webkit-scrollbar-button {
      height: 12px;
    }
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
    border : 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div `
    
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




const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
          <Link to="/" style={{textDecoration : "none" , color : "inherit"}}>
          <Logo>
            <Img src={Jaytube}/>
            JayTube
          </Logo>
          </Link>
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
          <Login>
            Sign in To like, comment videos and Subscribe
            <Button>
              <AccountCircleOutlinedIcon/>
                SIGN IN
            </Button>
          </Login>
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
          <Item onClick={()=>setDarkMode(!darkMode)}>
            <LightModeOutlinedIcon/>
            {darkMode ? "Light" : "Dark"} Mode
          </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu;