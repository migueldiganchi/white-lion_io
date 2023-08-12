import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppButton = ({
  variant,
  children,
  onClick,
  className,
  href,
  type,
  isCircular,
  disabled = false, // Agregamos la propiedad 'disabled' con valor por defecto
}) => {
  const classes = {
    primary: "App-button App-button_primary",
    secondary: "App-button App-button_secondary",
    dark: "App-button App-button_dark",
    light: "App-button App-button_light",
  };

  const buttonClasses = [
    classes[variant],
    className,
    "border border-2 rounded-full",
    isCircular ? "px-[11.1px] py-2" : "py-2 px-4",
    disabled ? "opacity-50 cursor-not-allowed" : "", // Estilo para botón deshabilitado
  ].join(" ");

  if (href) {
    return (
      <Link href={href} passHref>
        <span className={buttonClasses} onClick={disabled ? (e) => e.preventDefault() : onClick}>
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type={type || "button"}
      className={buttonClasses}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      disabled={disabled} // Propiedad 'disabled' en el botón
    >
      {children}
    </button>
  );
};

AppButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  isCircular: PropTypes.bool,
  disabled: PropTypes.bool, // Agregamos la definición de PropTypes para 'disabled'
};

export default AppButton;
