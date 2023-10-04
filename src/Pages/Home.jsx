import styled from "styled-components";
import Card from "../Components/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const Container = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    
`;


const Home = () => {

  const [videos, setVideo] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("http://localhost:5000/api/videos/random/");
      setVideo(res.data);
      console.log(res.data);
    }
    fetchVideos();
  },[])

  return (
    <Container>
       {videos.map((video) => (
          <Card video={video} key={video._id}/>
       ))}
    </Container>
  );
 
}

export default Home;