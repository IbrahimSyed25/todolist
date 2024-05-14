import { useEffect, useState } from "react";
import List from "./List";

// const todolist = [];
export default function App() {
  const [list, setList] = useState(() => {
    const saveditem = localStorage.getItem("list");
    return saveditem ? JSON.parse(saveditem) : [];
  });
  const [input, setInput] = useState();
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  function handleAdd(e) {
    e.preventDefault();
    // setList(() => input);
    if (input !== "") {
      setList([...list, input]);
      setInput("");
      // todolist.push(input);
    }
  }
  function handlechange(e) {
    e.preventDefault();
    setInput(() => e.target.value);
    // console.log(e.target.value);
  }
  // console.log(todolist);
  return (
    <div className="containermain">
      <h1> Get Things Done📃 </h1>
      <form
        className="d-flex flex-row justify-content-center mt-5 h-20 "
        onSubmit={handleAdd}
      >
        <input
          type="text"
          placeholder="add you todo item here"
          className="w-50 "
          style={{ height: "40px", borderRadius: "5px", color: "black" }}
          value={input}
          onChange={handlechange}
        ></input>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          {" "}
          Add
        </button>
      </form>
      <List
        list={list}
        setList={setList}
        handleAdd={handleAdd}
        // todolist={todolist}
      />
    </div>
  );
}
