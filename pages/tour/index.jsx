import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const VRTourDynamic = dynamic(() => import("../../components/AppVirtualTour"), {
  ssr: false,
});

// const VRTourDynamic = dynamic(() => import("../../components/AppTour"), {
//   ssr: false,
// });

const VRTourPage = () => {
  useEffect(() => {
    // Esta función se ejecutará después de que el componente se monte en el DOM

    // Modificar el estilo del elemento principal
    const nextDiv = document.getElementById("__next");
    if (nextDiv) {
      nextDiv.style.width = "100%";
    }

    // Limpieza: revertir los cambios cuando el componente se desmonte
    return () => {
      if (nextDiv) {
        nextDiv.style.width = ""; // Revertir el estilo al valor predeterminado
      }
    };
  }, []); // El array de dependencias vacío asegura que se ejecute solo una vez

  return (
    <div>
      <VRTourDynamic />
    </div>
  );
};

export default VRTourPage;
