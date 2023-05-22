import React from "react";
import hero from "./assets/hero.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Pitchfork schlitz tonx, coloring book celiac tousled succulents
            ascot affogato cardigan jianbing crucifix seitan. Synth man braid
            everyday carry try-hard pour-over keffiyeh slow-carb sriracha
            chillwave banjo gochujang kinfolk small batch mustache.
          </p>
        </div>
        <div className="img-container">
          <img src={hero} alt="Hero" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
