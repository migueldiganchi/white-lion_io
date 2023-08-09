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
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={buttonClasses} onClick={onClick}>
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
};

export default AppButton;
