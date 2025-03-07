import React, { useState } from "react";

function TodoItem({ todo, toggleComplete, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div className="actions">
        <button onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;