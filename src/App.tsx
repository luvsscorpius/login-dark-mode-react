import React, { useState, createContext } from "react";
import Form from './Components/Form/Form.tsx'
import './App.css';
import ReactSwitch from 'react-switch';

type ContextProps = {
  theme: String,
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ContextProps);

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    // Se a minha tela atual for light troca pro dark
    setTheme(curr => (curr === "light" ? "dark" : "light"))
  }

  return (
    <div className="App" id={theme}>
      <Form />
      <br />
      <br />
      <ReactSwitch checked={theme === "dark"} onChange={toggleTheme} />
    </div>
  );
}

export default App;
