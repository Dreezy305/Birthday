import "animate.css";
import { useEffect, useRef, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./App.css";
import m1 from "./asset/meej1.jpeg";
import logo from "./asset/meej1copy.jpeg";
import m2 from "./asset/meej2.jpeg";
import m3 from "./asset/meej3.jpeg";

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 300,
    arrows: false,
    infinite: true,
    easing: "ease",
    // indicators: (i) => <div className="indicator">{i + 1}</div>,
  };

  const slideImages = [m2, m3, m1, logo];

  useEffect(() => {
    setIsExploding(true);
  }, []);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsPlaying(!audioRef.current.muted);
    }
  };

  return (
    <>
      <div className="App">
        <audio autoPlay={true} ref={audioRef} loop style={{ display: "none" }}>
          <source
            src="https://www.epidemicsound.com/music/tracks/9a95dbcf-6c7d-30b1-869c-a19ec4f94f11/"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <div style={{ textAlign: "center", padding: "10px", display: "none" }}>
          <button
            onClick={handlePlayAudio}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#FFD700",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Play Birthday Song 🎶
          </button>
          <button
            onClick={toggleMute}
            style={{
              padding: "10px 20px",
              backgroundColor: "#FFD700",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isPlaying ? "Mute" : "Unmute"} 🎵
          </button>
        </div>
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
              🎉🎈🎉 Happy Birthday, Iya! 🎉🎈🎉
            </p>
            <span className="animate__animated animate__fadeInRight animate__slow prayer">
              Happy birthday biggest sis 🎉, you mean so much to us. May Allah's
              rahma, sekinah and Ibadah always be on you. Blessings on
              blessings, we love you.
              ✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂✨🎈🌟🎂
            </span>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
