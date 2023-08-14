import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import AppAssistant from "@/components/AppAssistant";
import AppButton from "@/components/IO/AppButton";

const AppVirtualTour = dynamic(() => import("@/components/AppVirtualTour"), {
  ssr: false,
});

export default function VRTourPage() {
  const [isOn, setIsOn] = useState(false);

  const goHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    // When component is mounted => Give all width to the current screen
    const nextDiv = document.getElementById("__next");
    if (nextDiv) {
      nextDiv.style.width = "100%";
    }

    setTimeout(() => {
      setIsOn(true);
    }, 4500);

    // When component is unmounted => revert changes
    return () => {
      if (nextDiv) {
        nextDiv.style.width = "";
      }
    };
  }, []); // Run only once

  return (
    <div>
      {/* Go Back Button */}
      <AppButton
        className={"back-btn bg-dark-gradient " + (isOn ? "is-on" : "")}
        variant="light"
        onClick={goHome}
      >
        <i className="mdi mdi-home mr-2" />
        Ir al Inicio
      </AppButton>

      {/* Assistant */}
      <AppAssistant isOn={isOn} />

      {/* App Virtual */}
      <AppVirtualTour />
    </div>
  );
}
