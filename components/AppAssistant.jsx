import React, { useState, useEffect, useRef, useContext } from "react";
import AppInput from "./IO/AppInput";
import AppButton from "./IO/AppButton";
import NotificationContext from "@/store/notification-context";
import AppConversation from "./AppConversation"; // Importar el nuevo componente

const AppAssistant = ({ isOn }) => {
  const [inputValue, setInputValue] = useState("");
  const [showlevitation, setShowlevitation] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [shouldFocusInput, setShouldFocusInput] = useState(false);
  const [conversation, setConversation] = useState([]); // Nuevo estado para la conversación

  const notificationCtx = useContext(NotificationContext);
  const inputRef = useRef(null);

  const delayer = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

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

    if (inputValue == "") {
      return;
    }

    const apiBaseUrl = process.env.API_URL
      ? process.env.API_URL
      : "http://localhost:9009";
    const apiEndpointUrl = `${apiBaseUrl}/io`;

    try {
      // Prepare Data to Send
      const apiBody = {
        interaction: {
          message: inputValue,
        },
      };

      // Prepare Headers to Send
      const apiHeaders = {
        "Content-Type": "application/json",
      };

      // Add New User Message To Conversation
      setConversation((prevConversation) => [
        ...prevConversation,
        { type: "user", message: inputValue },
      ]);

      // Clear Input just After Send the Message
      setInputValue("");

      // Init Server Working
      setIsWaiting(true);

      // Time Delayer
      await delayer(3000);

      // Go Bot API
      const apiResponse = await fetch(apiEndpointUrl, {
        method: "POST",
        body: JSON.stringify(apiBody),
        headers: apiHeaders,
      });

      // End Server Working
      setIsWaiting(false);

      // Decode JSON Response Data
      const apiResponseData = await apiResponse.json();

      notificationCtx.showNotification({
        title: "Enviado!",
        message: "El mensaje se ha enviado correctamente",
        variant: "success",
      });

      // Add Bot Message to Conversation
      setConversation((prevConversation) => [
        ...prevConversation,
        { type: "bot", message: apiResponseData.message }, // Mensaje del bot
      ]);

      // Activa el enfoque en el input después de enviar el mensaje
      setShouldFocusInput(true);
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error",
        message: "Ha ocurrido un inconveniente al enviar el mensaje",
        variant: "error",
      });
    }
  };

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

  useEffect(() => {
    if (shouldFocusInput && inputRef.current) {
      inputRef.current.focus();
      setShouldFocusInput(false);
    }
  }, [shouldFocusInput, inputRef]);

  return (
    <div className="app-assistant-container">
      <div
        className={
          "App-assistant_activator " + (!isActive && isOn ? "is-visible" : "")
        }
      >
        <AppButton variant={"light"} onClick={startAssistant}>
          ¡Hola! <i className="mdi mdi-robot" />
        </AppButton>
      </div>

      <div>{isActive ? <div className={"App-assistant_locker"} /> : null}</div>

      <div
        className={`App-assistant bg-dark-gradient p-6 max-w-[315px] rounded-3xl animate__animated animate__pulse animate_slower ${
          showlevitation ? "levitation" : ""
        } ${isActive ? "active" : ""}`}
      >
        {conversation.length === 0 ? (
          <h3 className="mb-4 text-white font-thin">
            Hola, soy <b>Ángela</b>, la asistente Virtual de <b>White Lion</b>,
            ¿Cómo puedo ayudarte?
          </h3>
        ) : (
          <AppConversation messages={conversation} />
        )}

        <form onSubmit={sendMessage}>
          <AppInput
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleChange}
            disabled={isWaiting}
            placeholder="Escribe aquí tu pregunta..."
          />

          <div className="mt-6" />

          <AppButton
            variant={"light"}
            onClick={cancelAssistant}
            className="mr-3"
            isCircular
          >
            <i className="mdi mdi-close mr-2" />
            Cancelar
          </AppButton>

          <AppButton
            type="submit"
            variant={"light"}
            disabled={isWaiting || inputValue == ""}
          >
            Enviar
            <i className="mdi mdi-check ml-2" />
          </AppButton>
        </form>
      </div>
    </div>
  );
};

export default AppAssistant;
