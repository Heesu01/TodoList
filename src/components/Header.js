import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Title>오늘은 📅</Title>
      <Day>{new Date().toDateString()}</Day>
    </Container>
  );
};

export default Header;

const Container = styled.div``;
const Title = styled.h3``;
const Day = styled.h1`
  margin-bottom: 0px;
  color: #1f93ff;
`;
