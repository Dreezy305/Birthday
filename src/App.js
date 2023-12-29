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
        <div className="" style={{ width: "50%" }}>
          <p
            className="birthday animate__animated animate__fadeInLeftBig animate__slow"
            style={{}}
          >
            🎉🎈🎉 Happy Birthday, Babe! 🎉🎈🎉
          </p>
          <span className="animate__animated animate__fadeInRight animate__slow prayer">
            Happy Birthday, my love! 🎉 Your presence lights up my world. Here's
            to more joy, laughter, and love together. Cheers to your special day
            and a lifetime of happiness. I love you endlessly
            ✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
