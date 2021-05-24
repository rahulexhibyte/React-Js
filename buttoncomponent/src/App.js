import "./App.css";
import React, { useState } from "react";

import Button from "./component/Button";

function App() {
  const [isProgress, setIsProgress] = useState(true);
  setTimeout(() => {
    setIsProgress(false);
  }, 5000);

  return (
    <div className="container">
      <Button
        value="Click Me"
        styleClasses="primary"
        isProgress={isProgress}
      ></Button>
    </div>
  );
}

export default App;
