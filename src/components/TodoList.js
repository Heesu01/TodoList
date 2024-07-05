import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <Container>
      <Title>Todo List 🌱</Title>
      <Input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <ListWrapper>
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ListWrapper>
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.h4``;
const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(220, 220, 220);
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 15px;
  &:focus {
    outline: none;
    border-bottom: 1px solid #1f93ff;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default TodoList;
