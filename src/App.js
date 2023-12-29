import "animate.css";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./App.css";
import logo from "./asset/mariam.jpeg";

function App() {
  const [isExploding, setIsExploding] = useState(false);
  // const slideRef = useRef();

  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 100,
    arrows: false,
    infinite: true,
    easing: "ease",
    // indicators: (i) => <div className="indicator">{i + 1}</div>,
  };

  const slideImages = [logo, logo, logo];

  useEffect(() => {
    setIsExploding(true);
  }, []);

  return (
    <>
      <div className="App">
        <Fade {...properties}>
          {slideImages.map((each, index) => (
            <div
              key={index}
              className="each-slide"
              style={{ paddingTop: "50px" }}
            >
              <img
                className="lazy"
                src={each}
                alt="sample"
                style={{
                  height: "400px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </Fade>
        <header className="mx">
          {isExploding && (
            <ConfettiExplosion
              width={1600}
              particleCount={250}
              duration={6000}
              force={0.8}
              height={"120vh"}
              onComplete={() => setIsExploding(true)}
            />
          )}
          <div
            className=""
            style={{ width: "50%", margin: "auto", paddingBottom: "50px" }}
          >
            <p
              className="birthday animate__animated animate__fadeInLeftBig animate__slow"
              style={{}}
            >
              🎉🎈🎉 Happy Birthday, Babe! 🎉🎈🎉
            </p>
            <span className="animate__animated animate__fadeInRight animate__slow prayer">
              Happy Birthday, my love! 🎉 Your presence lights up my world.
              Here's to more joy, laughter, and love together. Cheers to your
              special day and a lifetime of happiness. I love you endlessly
              ✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂
            </span>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
