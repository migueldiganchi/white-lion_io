import React, { useState, useEffect } from "react";
import AppInput from "./IO/AppInput";
import AppButton from "./IO/AppButton";

const AppAssistant = () => {
  const [inputValue, setInputValue] = useState("");
  const [showlevitation, setShowlevitation] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const levitationTimer = setTimeout(() => {
      setShowlevitation(true);
    }, 2700);

    const assistantTimer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    return () => {
      clearTimeout(assistantTimer);
      clearTimeout(levitationTimer);
    };
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const cancelAssistant = () => {
    setIsActive(false);
  };

  return [
    <div key="activator" className="App-assistant_activator"></div>,

    <div
      key="assistant"
      className={`App-assistant bg-dark-gradient p-6 max-w-[270px] rounded-3xl animate__animated animate__pulse animate_slower ${
        showlevitation ? "levitation" : ""
      } ${isActive ? "active" : ""}`}
    >
      <h3 className="mb-4 text-white font-thin">
        Hola, soy Ángela, la asistente Virtual de White Lion
      </h3>

      <AppInput
        type="email"
        value={inputValue}
        onChange={handleChange}
        placeholder="¿De qué se trata?"
      />

      <div className="mt-3"></div>
      <AppButton disabled variant={"light"} onClick={cancelAssistant}>
        Listo
      </AppButton>
    </div>,
  ];
};

export default AppAssistant;
