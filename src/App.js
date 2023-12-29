import "animate.css";
import "./App.css";
import logo from "./asset/mariam.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ borderRadius: "20px" }}
        />
        <p
          className="birthday animate__animated animate__fadeInLeftBig animate__slow"
          style={{}}
        >
          Happy Birthday in advance Babe!
        </p>
        <span className="animate__animated animate__fadeInRight animate__slow prayer">
          Long life and prosperity.
        </span>
      </header>
    </div>
  );
}

export default App;
