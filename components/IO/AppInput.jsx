import React, { forwardRef } from "react";

const AppInput = forwardRef(({ className, disabled, ...props }, ref) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <input
        ref={ref}
        className={`w-full px-4 py-3 mb-0 rounded-full focus:outline-none ${
          props.className ? props.className : ""
        }`}
        disabled={disabled} // Agregamos la propiedad 'disabled' al input
        {...props}
      />
    </div>
  );
});

export default AppInput;
