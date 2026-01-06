import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>

      <hr />

      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert severity="error">this is error alert box</Alert>
        <Alert severity="warning">this is warning alert box</Alert>
        <Alert severity="info">this is info alert box</Alert>
        <Alert severity="success">this is success alert box</Alert>
      </div>
    </div>
  );
}

export default App;