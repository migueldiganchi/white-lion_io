import React, { useState, useEffect, useRef } from "react";
import AppInput from "./IO/AppInput";
import AppButton from "./IO/AppButton";

const AppAssistant = () => {
  const [inputValue, setInputValue] = useState("");
  const [showlevitation, setShowlevitation] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

  const sendMessage = (e) => {
    alert("Going to send this message: " + inputValue);
    e.preventDefault();
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
        <div className="mt-3" />

        {/* Actions */}
        <AppButton
          variant={"light"}
          onClick={cancelAssistant}
          className="mr-3"
          isCircular
        >
          <i className="mdi mdi-arrow-left" />
        </AppButton>

        <AppButton type="submit" variant={"light"}>
          Enviar
        </AppButton>
      </form>
    </div>,
  ];
};

export default AppAssistant;
