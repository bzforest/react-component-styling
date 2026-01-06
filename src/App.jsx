import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import frown from "./assets/frown.png";
import alertTriangle from "./assets/alert-triangle.png";
import alertCircle from "./assets/alert-circle.png";
import checkCircle from "./assets/check-circle.png";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section flex flex-row">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error" text="This is error alert box" imgSrc={frown} />
        <Alert
          type="warning"
          text="This is warning alert box"
          imgSrc={alertTriangle}
        />
        <Alert
          type="info-alert"
          text="This is info alert box"
          imgSrc={alertCircle}
        />
        <Alert
          type="success"
          text="This is success alert box"
          imgSrc={checkCircle}
        />
      </div>
    </div>
  );
}

export default App;
