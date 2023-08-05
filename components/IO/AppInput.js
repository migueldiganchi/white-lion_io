import React, { useRef, useEffect } from "react";

const AppInput = ({ className, ...props }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <input
        ref={inputRef}
        className={`w-full px-4 py-3 mb-0 rounded-full focus:outline-none ${
          props.className ? props.className : ""
        }`}
        {...props}
      />
    </div>
  );
};

export default AppInput;
