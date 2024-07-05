import React from "react";
import styled from "styled-components";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <Container>
      <Box>
        <CheckBox
          onChange={onChangeCheckbox}
          checked={isDone}
          type="checkbox"
        />
      </Box>
      <Title>{content}</Title>
      <Day>{new Date(createdDate).toLocaleDateString()}</Day>
      <BtnBox>
        <Btn onClick={onClickDelete}>삭제</Btn>
      </BtnBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
`;
const Box = styled.div`
  width: 20px;
`;
const CheckBox = styled.input``;
const Title = styled.div`
  flex: 1;
`;
const Day = styled.div`
  font-size: 14px;
  color: gray;
`;
const BtnBox = styled.div``;
const Btn = styled.button`
  cursor: pointer;
  color: gray;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;
export default TodoItem;
