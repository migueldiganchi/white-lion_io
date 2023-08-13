import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import AppAssistant from "@/components/AppAssistant";

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
    }, 3681);

    // When component unmounted => revert changes
    return () => {
      if (nextDiv) {
        nextDiv.style.width = "";
      }
    };
  }, []); // Run only once

  return (
    <div>
      {/* Assistant */}
      <AppAssistant isOn={isOn} />

      {/* App Virtual */}
      <AppVirtualTour />
    </div>
  );
}
