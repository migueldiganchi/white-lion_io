import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const panoramasPath = "/media/v-tours";
const panoramas = Array.from(
  { length: 3 },
  (_, index) => `${panoramasPath}/${index + 1}.jpg`
);

const AppTour = () => {
  const [currentPanoramaIndex, setCurrentPanoramaIndex] = useState(0);
  const sceneRef = useRef(null);
  const panoramaRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const panoramaEl = panoramaRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0.1);

    const renderer = new THREE.WebGLRenderer({ canvas: panoramaEl });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(500, 60, 40); // Aumentar el radio y la calidad
    geometry.scale(-1, 1, 1); // Invertir la geometría para que el interior sea visible

    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(panoramas[currentPanoramaIndex]),
      side: THREE.DoubleSide,
    });

    const panorama = new THREE.Mesh(geometry, material);
    scene.add(panorama);

    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const handleMouseDown = (event) => {
      isDragging = true;
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
      document.body.style.cursor = "grabbing";
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const deltaX = (previousMouseX - event.clientX) * 0.005; // Ajustar la velocidad horizontal
      const deltaY = (event.clientY - previousMouseY) * 0.005; // Ajustar la velocidad vertical
      panorama.rotation.y += deltaX;
      camera.rotation.x += deltaY;

      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.body.style.cursor = "grab";
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const resizeHandler = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", resizeHandler);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [currentPanoramaIndex]);

  const handlePanoramaClick = () => {
    setCurrentPanoramaIndex((prevIndex) => (prevIndex + 1) % panoramas.length);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        cursor: "grab",
      }}
    >
      <canvas ref={panoramaRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default AppTour;
