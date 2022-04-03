import React from "react";
import { List } from "antd";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const { todos } = useSelector((state) => state);
  console.log(todos);
  return (
    <>
      {todos.todos.length > 0 ? (
        todos.todos.map((todo) => {
          return <h1 key={todo.id}>{todo.content}</h1>;
        })
      ) : (
        <h1>Empty</h1>
      )}
      {/* <List
        size="large"
        bordered
        dataSource={todos.todos}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      /> */}
    </>
  );
};

export default ListTodo;
