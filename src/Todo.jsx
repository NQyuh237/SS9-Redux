import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Hàm này được sử dụng để lấy dữ liệu từ localStorage
  const getStoredTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  };

  // Khi component được tạo, chúng ta sẽ lấy dữ liệu từ localStorage
  useEffect(() => {
    getStoredTodos();
  }, []);

  // Khi dữ liệu thay đổi, chúng ta sẽ lưu dữ liệu mới vào localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      const newTodo = {
        id: Math.random(),
        text: value,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
    }
  };

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setTodos(
        [...todos].sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
      );
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    if (editingTodo !== id) {
      setEditingTodo(id);
      setEditedText(todos.find((todo) => todo.id === id).text);
    }
  };

  const handleUpdate = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
    setEditedText("");
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <h2>Get things done, one item at a time.</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleCheck(todo.id)}
            />
            {editingTodo === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)}>Update</button>
              </>
            ) : (
              <>
                <span className={todo.done ? "done" : ""}>{todo.text}</span>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="toggle">
        <label htmlFor="toggle">Move done items at the end</label>
        <input
          type="checkbox"
          id="toggle"
          checked={toggle}
          onChange={handleToggle}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add to the todo list"
        />
        <button type="submit">ADD ITEM</button>
      </form>
    </div>
  );
}

export default TodoList;
