import React, { useEffect, useRef, useState } from "react";
import "aframe";

const panoramasPath = "/media/v-tours";
const panoramas = Array.from(
  { length: 25 },
  (_, index) => `${panoramasPath}/${index + 1}.jpg`
);

const AppVRTour = () => {
  const [currentPanoramaIndex, setCurrentPanoramaIndex] = useState(0);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const sceneEl = sceneRef.current;
    const skyEl = sceneEl.querySelector("a-sky");
    skyEl.setAttribute("src", panoramas[currentPanoramaIndex]);
  }, [currentPanoramaIndex]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!cameraRef.current) return;

      const cameraEl = cameraRef.current;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      const mouseX = event.clientX - windowHalfX;
      const mouseY = event.clientY - windowHalfY;
      const yaw = (mouseX / windowHalfX) * -180;
      const pitch = (mouseY / windowHalfY) * 90;

      cameraEl.setAttribute("rotation", `${pitch} ${yaw} 0`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handlePanoramaClick = () => {
    setCurrentPanoramaIndex((prevIndex) => (prevIndex + 1) % panoramas.length);
  };

  return (
    <a-scene ref={sceneRef} cursor="rayOrigin: mouse">
      <a-light type="ambient" color="#888" intensity="0.5"></a-light>
      <a-light
        type="directional"
        color="#fff"
        intensity="1"
        position="2 4 -3"
      ></a-light>
      <a-sky src={panoramas[currentPanoramaIndex]} rotation="0 -130 0"></a-sky>
      <a-camera look-controls-enabled="false" ref={cameraRef}>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  );
};

export default AppVRTour;
