import React, { useEffect, forwardRef } from "react";

const AppInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <input
        ref={ref} // Utilizar la referencia directamente en el input
        className={`w-full px-4 py-3 mb-0 rounded-full focus:outline-none ${
          props.className ? props.className : ""
        }`}
        {...props}
      />
    </div>
  );
});

export default AppInput;
