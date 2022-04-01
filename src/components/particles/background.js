import React from 'react';
import Particles from 'react-tsparticles';

const BackgroundParticles = ({ particles }) => {
  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {};
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particles}
    />
  );
};

export default BackgroundParticles;