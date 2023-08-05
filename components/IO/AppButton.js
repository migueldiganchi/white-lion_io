import React from "react";

const AppButton = ({ variant, children, onClick, className }) => {
  const classes = {
    primary: "App-button App-button_primary",
    secondary: "App-button App-button_secondary",
    dark: "App-button App-button_dark",
    light: "App-button App-button_light",
  };

  return (
    <button
      type="button"
      className={
        "py-2 px-4 rounded-full border-2 py-3 px-6 " +
        classes[variant] +
        " " +
        className // Aquí se agregan las clases personalizadas
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AppButton;
