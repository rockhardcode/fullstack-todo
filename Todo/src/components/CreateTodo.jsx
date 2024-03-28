// This component creates todos
import { useState } from "react";
import '../App.css'

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleDesc = (event) => {
    const value = event.target.value;
    setDesc(value);
  };
  const handleSubmit = () => {
    if(title && desc) {
        fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: desc,
      }),
      headers: {
        'Content-type': "application/json",
      },
    }).then(async (res) => {
      const json = await res.json();
      alert(json.msg);
    });
    }
    
  };
  return (
    <div className="form-container">
      <input type="text" placeholder="Title" onChange={handleTitle} className="form__field"/>
      <br />
      <input type="text" placeholder="Description" onChange={handleDesc} className="form__field"/>
      <br />
      <div className="btn-container">
      <button className="btn-style" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
};

export default CreateTodo;
