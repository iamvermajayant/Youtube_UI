import styled from "styled-components";
import Card from "../Components/Card";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    
`;




const Home = () => {

  const [video, setVideo] = useState([])

  useEffect(() => {

  },[])

  return (
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
  )
}

export default Home;