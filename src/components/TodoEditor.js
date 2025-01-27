import React, { useRef, useState } from "react";
import styled from "styled-components";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <Container>
      <Title>새로운 Todo 작성하기 ✏️</Title>
      <EditorWrapper>
        <Input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo ..."
        />
        <Button onClick={onSubmit}>추가</Button>
      </EditorWrapper>
    </Container>
  );
};
const Container = styled.div``;
const Title = styled.h4``;
const EditorWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
const Input = styled.input`
  flex: 1;
  box-sizing: border-box;
  border: 1px solid rgb(220, 220, 220);
  /* border: 2px dotted rgb(220, 220, 220); */
  border-radius: 5px;
  padding: 15px;
  &:focus {
    outline: none;
    border: 1px solid #1f93ff;
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 80px;
  border: none;
  border-radius: 5px;
  background-color: #1f93ff;
  color: white;
`;
export default TodoEditor;
