import { useEffect, useState } from "react";

import "./App.css";
import { pingApi } from "./apis/ping";
import {PingComponent} from "./components/atoms/PingComponent";

function App() {
  const [isVisble, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisble)}>Toggle</button>
      {isVisble && <PingComponent/>}
    </>
  );
}

export default App;
