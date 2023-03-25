import { useState } from "react";

interface ButtonProps {
  onClick(): void;
  children: string;
}

interface User {
  name: string;
  age: number;
}

const Button = (props: ButtonProps) => {
  const a: string = "a";
  const [name, setName] = useState("");
  const [list, setList] = useState<Array<User>>([]);

  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
