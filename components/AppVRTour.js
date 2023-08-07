// components/VRTour.js
import React, { useEffect, useRef, useState } from "react";
import "aframe";

const panoramas = [
  "/media/v-tours/1.jpg",
  "/media/v-tours/2.jpg",
  "/media/v-tours/3.jpg",
  "/media/v-tours/4.jpg",
  "/media/v-tours/5.jpg",
  "/media/v-tours/6.jpg",
  "/media/v-tours/7.jpg",
  "/media/v-tours/8.jpg",
  "/media/v-tours/9.jpg",
  "/media/v-tours/10.jpg",
  "/media/v-tours/11.jpg",
  "/media/v-tours/12.jpg",
  "/media/v-tours/13.jpg",
  "/media/v-tours/14.jpg",
  "/media/v-tours/15.jpg",
  "/media/v-tours/16.jpg",
  "/media/v-tours/17.jpg",
  "/media/v-tours/18.jpg",
  "/media/v-tours/19.jpg",
  "/media/v-tours/20.jpg",
  "/media/v-tours/21.jpg",
  "/media/v-tours/22.jpg",
  "/media/v-tours/23.jpg",
  "/media/v-tours/24.jpg",
  "/media/v-tours/25.jpg",
  // Add more panorama paths here
];

const VRTour = () => {
  const [currentPanoramaIndex, setCurrentPanoramaIndex] = useState(0);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const sceneEl = sceneRef.current;
      const skyEl = sceneEl.querySelector("a-sky");
      skyEl.setAttribute("src", panoramas[currentPanoramaIndex]);
    }
  }, [currentPanoramaIndex]);

  useEffect(() => {
    if (cameraRef.current) {
      const cameraEl = cameraRef.current;
      const handleMouseMove = (event) => {
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
    }
  }, []);

  const handlePanoramaClick = () => {
    setCurrentPanoramaIndex((prevIndex) => (prevIndex + 1) % panoramas.length);
  };

  return (
    <a-scene ref={sceneRef} cursor="rayOrigin: mouse">
      {/* Add lights */}
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
      {/* <a-entity
        geometry="primitive: plane; width: 10; height: 10"
        material="color: red"
        position="0 0 -5"
        onClick={handlePanoramaClick}
      ></a-entity> */}
    </a-scene>
  );
};

export default VRTour;
