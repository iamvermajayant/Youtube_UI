import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color : ${({theme})=> theme.text};
`;

const Name = styled.span`
    font-size : 13px;
    font-weight : 500;
`;

const Date = styled.span`
    font-size : 12px;
    font-weight : 400;
    color : ${({theme}) => theme.textSoft};
    margin-left : 5px;
`;

const Text = styled.span`
    font-size : 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.googleusercontent.com/DhVq3438WZYaIVF1nsWiR801dCOvfpUn_RkX0goc1FFH-1rzHW_mVl0R1oD1mTz8McdOlPT1Qg=s176-c-k-c0x00ffffff-no-rj-mo" />
      <Details>
        <Name>
          Shinda Kahlon <Date>2 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla
          quidem cum explicabo, iusto accusamus amet illum dolorem pariatur
          facilis, quam veniam assumenda ex eligendi sequi quo aut voluptatem
          fuga?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
