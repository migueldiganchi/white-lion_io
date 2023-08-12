import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import AppAssistant from "@/components/AppAssistant";

const AppVirtualTour = dynamic(() => import("@/components/AppVirtualTour"), {
  ssr: false,
});

export default function VRTourPage() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // Esta función se ejecutará después de que el componente se monte en el DOM

    // Modificar el estilo del elemento principal
    const nextDiv = document.getElementById("__next");
    if (nextDiv) {
      nextDiv.style.width = "100%";
    }

    setTimeout(() => {
      setIsOn(true);
    }, 3681);

    // Limpieza: revertir los cambios cuando el componente se desmonte
    return () => {
      if (nextDiv) {
        nextDiv.style.width = ""; // Revertir el estilo al valor predeterminado
      }
    };
  }, []); // El array de dependencias vacío asegura que se ejecute solo una vez

  return (
    <div>
      {/* Assistant */}
      <AppAssistant isOn={isOn} />

      {/* App Virtual */}
      <AppVirtualTour />
    </div>
  );
}
