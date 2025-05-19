import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CreateProject } from "./pages/CreateProject";


function App() {
  const [isVisble, setIsVisible] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<CreateProject/>}/>
    </Routes>
  );
}

export default App;
