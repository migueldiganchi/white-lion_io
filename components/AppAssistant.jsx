import React, { useState, useEffect, useRef, useContext } from "react";
import AppInput from "./IO/AppInput";
import AppButton from "./IO/AppButton";
import NotificationContext from "@/store/notification-context";

const AppAssistant = () => {
  const [inputValue, setInputValue] = useState("");
  const [showlevitation, setShowlevitation] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const notificationCtx = useContext(NotificationContext);
  const inputRef = useRef(null); // Referencia al input

  useEffect(() => {
    const levitationTimer = setTimeout(() => {
      setShowlevitation(true);
    }, 2700);

    const assistantTimer = setTimeout(() => {
      setIsActive(false);
    }, 1000);

    return () => {
      clearTimeout(assistantTimer);
      clearTimeout(levitationTimer);
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const cancelAssistant = () => {
    setIsActive(false);
  };

  const startAssistant = () => {
    setIsActive(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 333);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    const apiBaseUrl = process.env.API_URL
      ? process.env.API_URL
      : "http://localhost:9009";
    const apiEndpointUrl = `${apiBaseUrl}/io`;

    try {
      const apiBody = {
        interaction: {
          message: inputValue,
        },
      };

      const apiHeaders = {
        "Content-Type": "application/json",
      };

      const apiResponse = await fetch(apiEndpointUrl, {
        method: "POST",
        body: JSON.stringify(apiBody),
        headers: apiHeaders,
      });
      const apiResponseData = apiResponse.json();

      console.log("[apiResponse]", apiResponse);
      console.log("[apiResponseData]", apiResponseData);

      notificationCtx.showNotification({
        title: "Enviado!",
        message: "El mensaje se ha enviado correctamente",
        variant: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error",
        message: "Ha ocurrido un iconveniente al enviar el mensaje",
        variant: "error",
      });
    }
  };

  return [
    <div
      key="activator"
      className={"App-assistant_activator " + (!isActive ? "is-visible" : "")}
    >
      {/* Actions */}
      <AppButton disabled variant={"light"} onClick={startAssistant}>
        ¡Hola! <i className="mdi mdi-robot" />
      </AppButton>
    </div>,

    <div key="locker">
      {isActive ? <div className={"App-assistant_locker"} /> : null}
    </div>,

    <div
      key="assistant"
      className={`App-assistant bg-dark-gradient p-6 max-w-[315px] rounded-3xl animate__animated animate__pulse animate_slower ${
        showlevitation ? "levitation" : ""
      } ${isActive ? "active" : ""}`}
    >
      <form onSubmit={sendMessage}>
        {/* Title */}
        <h3 className="mb-4 text-white font-thin">
          Hola, soy <b>Ángela</b>, la asistente Virtual de <b>White Lion</b>,
          ¿Cómo puedo ayudarte?
        </h3>

        {/* Text to Send */}
        <AppInput
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Escribe aquí tu pregunta..."
        />

        {/* Actions Space */}
        <div className="mt-6" />

        {/* Actions */}
        <AppButton
          variant={"light"}
          onClick={cancelAssistant}
          className="mr-3"
          isCircular
        >
          <i className="mdi mdi-close mr-2" />
          Cancelar
        </AppButton>

        <AppButton type="submit" variant={"light"}>
          Enviar
          <i className="mdi mdi-check ml-2" />
        </AppButton>
      </form>
    </div>,
  ];
};

export default AppAssistant;
