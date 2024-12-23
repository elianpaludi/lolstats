import React from "react";
import Nav from "./Nav.js";
import Subnav from "./Subnav.js";

function Home() {
  const betominTwitchLogin = "betomin"; // Nombre de usuario de Twitch de Betomin
  const twitchIframeSrc = `https://player.twitch.tv/?channel=${betominTwitchLogin}&parent=${window.location.hostname}`;

  return (
    <main className="home_container">
      <Subnav />
      <Nav />

      <div className="home-top">
        <img className="background" src="./img/background.png" alt="Background" />
        <div className="home_content">
          <img className="bqc" src="./img/btc.png" alt="BQC Logo" />

          <div className="home_beto-container">

            <iframe
              className="beto-stream"
              src={twitchIframeSrc}
              height="300"
              width="500"
              allowFullScreen={true}
              title="Stream de Betomin"
            ></iframe>
            <a target="_blank" href="https://twitch.tv/Betomin">Betomin</a>
          </div>
        </div>

        <div className="participantes-banner-home">
          <h3>#BETOQ</h3>
          <img className="participantes-img" src="img/trofeo.png" alt="Trophy" />
          <h3>CHALLENGE</h3>
        </div>
      </div>
    </main>
  );
}

export default Home;
