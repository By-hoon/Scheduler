import React, { useEffect, useState } from "react";
import ScheduleBlock from "./ScheduleBlock";

function App() {
  const [windowReady, setWindowReady] = useState(false);
  useEffect(() => {
    setWindowReady(true);
  }, []);
  return <>{windowReady ? <ScheduleBlock /> : null}</>;
}

export default App;
