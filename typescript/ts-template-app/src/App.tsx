import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const showAlert = () => {
    alert("alert!");
  };
  return (
    <div className="App">
      <Button onClick={showAlert} children="버튼"></Button>
    </div>
  );
}

export default App;
