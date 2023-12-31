import React, { useEffect, useRef, useState } from "react";
import { Pannellum } from "pannellum-react";
import scenesData from "@/data/scenes";

export default function Scene() {
  const [scene, setScene] = useState(scenesData["stairScene"]);
  const mountRef = useRef(null);
  const pannellumRef = useRef(null);

  // Open Information Modal
  const openModal = () => {
    alert("Open Information Modal");
  };

  // Render Customized Hotspot
  const renderHotspot = (hotSpotDiv, args) => {
    hotSpotDiv.classList.add("custom-tooltip");
    var span = document.createElement("span");
    span.innerHTML = args.text;
    hotSpotDiv.appendChild(span);
  };

  const handleLoader = () => {
    setTimeout(() => {
      const loadingTextElement = document.querySelector(".pnlm-load-box p");
      if (loadingTextElement) {
        loadingTextElement.innerHTML = "Cargando...";
      }
    }, 33);
  };

  // Hot Spot List
  const getHotSpots = (element, i) => {
    if (element.cssClass === "hotSpotElement")
      return (
        <Pannellum.Hotspot
          key={i}
          type={element.type}
          pitch={element.pitch}
          yaw={element.yaw}
          text={element.text}
          URL={element.url}
          compass={true}
          cssClass={element.cssClass}
          handleClick={() => {
            openModal();
          }}
        />
      );
    else if (element.cssClass === "moveScene")
      return (
        <Pannellum.Hotspot
          key={i}
          type={element.type}
          pitch={element.pitch}
          yaw={element.yaw}
          text={element.text}
          cssClass={element.cssClass}
          tooltip={renderHotspot}
          tooltipArg={{ text: element.text }}
          handleClick={() => {
            handleLoader();
            setScene(scenesData[element.scene]);
          }}
        />
      );
  };

  // After load all DOM we clear all prev mounted elements
  useEffect(() => {
    const currentRef = mountRef.current;

    handleLoader();

    return () => {
      for (let i = currentRef.children.length - 1; i >= 0; i--) {
        const child = currentRef.children[i];
        currentRef.removeChild(child);
      }
    };
  }, []);

  return (
    <div ref={mountRef}>
      <Pannellum
        ref={pannellumRef}
        width={"100%"}
        height={"100vh"}
        title={scene.title}
        image={scene.image}
        pitch={-16.28}
        yaw={-1.66}
        hfov={130}
        autoLoad={true}
        showControls={false}
        showFullscreenCtrl={false}
        showZoomCtrl={false}
        orientationOnByDefault={true}
        hotspotDebug={true}
      >
        {Object.values(scene.hotSpot).map((element, i) =>
          getHotSpots(element, i)
        )}
      </Pannellum>
    </div>
  );
}
