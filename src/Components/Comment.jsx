import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const NewComment = styled.div``;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span``;

const Date = styled.span``;

const Text = styled.span``;

const Comment = () => {
  return (
    <Container>
      <Avatar src="" />
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
