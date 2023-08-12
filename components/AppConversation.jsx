import React, { useState, useEffect } from "react";

const AppConversation = ({ messages }) => {
  const [currentIndex, setCurrentIndex] = useState(messages.length - 1);

  const goToPreviousMessage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextMessage = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToFirstMessage = () => {
    setCurrentIndex(0);
  };

  const goToLastMessage = () => {
    setCurrentIndex(messages.length - 1);
  };

  useEffect(() => {
    setCurrentIndex(messages.length - 1); // Mostrar siempre el último mensaje
  }, [messages]);

  const currentMessage = messages[currentIndex];

  return (
    <div className="app-conversation w-[270px]">
      <div className="message">
        <div className="profile">
          <img
            src={
              currentMessage.type === "user"
                ? "/media/user-avatar.png"
                : "/media/bot-avatar.png"
            }
            alt={currentMessage.type === "user" ? "User Avatar" : "Bot Avatar"}
            className="avatar max-w-[90px] mx-auto mb-6"
          />
          <span className="name text-white text-lg mb-4">
            {currentMessage.type === "user" ? "Tú" : "Ángela"}
          </span>
        </div>
        <div className="message-content text-sm text-white mb-3">
          {currentMessage.message}
        </div>
      </div>
      <div className="message-navigation mb-1">
        <button
          className={`message-navigation-btn text-white ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={goToFirstMessage}
          disabled={currentIndex === 0}
        >
          <i className="mdi mdi-skip-previous text-lg mx-1" />
        </button>
        <button
          className={`message-navigation-btn text-white ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={goToPreviousMessage}
          disabled={currentIndex === 0}
        >
          <i className="mdi mdi-arrow-left text-lg mx-1" />
        </button>
        <button
          className={`message-navigation-btn text-white ${
            currentIndex === messages.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={goToNextMessage}
          disabled={currentIndex === messages.length - 1}
        >
          <i className="mdi mdi-arrow-right text-lg mx-1" />
        </button>
        <button
          className={`message-navigation-btn text-white ${
            currentIndex === messages.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={goToLastMessage}
          disabled={currentIndex === messages.length - 1}
        >
          <i className="mdi mdi-skip-next text-lg mx-1" />
        </button>
      </div>

      <div className="text-center mb-5 text-gray-400">
        <small>
          {currentIndex + 1} de {messages.length}
        </small>
      </div>
    </div>
  );
};

export default AppConversation;
