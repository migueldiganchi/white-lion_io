import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const panoramaPath = "/media/v-tours/3.jpg";

const AppTour = () => {
  const panoramaRef = useRef(null);

  useEffect(() => {
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

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(panoramaPath),
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
      panoramaEl.style.cursor = "grabbing";
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const deltaX = (previousMouseX - event.clientX) * 0.005;
      const deltaY = (event.clientY - previousMouseY) * 0.005;
      panorama.rotation.y += deltaX;
      camera.rotation.x += deltaY;

      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      panoramaEl.style.cursor = "grab";
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
  }, []);

  return (
    <canvas
      ref={panoramaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        cursor: "grab",
      }}
    />
  );
};

export default AppTour;
