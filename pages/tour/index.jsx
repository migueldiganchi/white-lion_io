import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import AppAssistant from "@/components/AppAssistant";
import AppButton from "@/components/IO/AppButton";

const AppVirtualTour = dynamic(() => import("@/components/AppVirtualTour"), {
  ssr: false,
});

export default function VRTourPage() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // When component mount => Give all width to the current screen
    const nextDiv = document.getElementById("__next");
    if (nextDiv) {
      nextDiv.style.width = "100%";
    }

    setTimeout(() => {
      setIsOn(true);
    }, 999);

    // When component unmounted => revert changes
    return () => {
      if (nextDiv) {
        nextDiv.style.width = "";
      }
    };
  }, []); // Run only once

  return (
    <div>
      {/* Menu */}
      <AppButton
        className={"back-btn bg-dark-gradient " + (isOn ? "is-on" : "")}
        variant="light"
        onClick={() => (window.location.href = "/")}
      >
        <i className="mdi mdi-arrow-left mr-2" />
        Inicio
      </AppButton>

      {/* Assistant */}
      <AppAssistant isOn={isOn} />

      {/* App Virtual */}
      <AppVirtualTour />
    </div>
  );
}
