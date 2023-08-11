import React, { useContext } from "react";

import NotificationContext from "@/store/notification-context";

export default function AppNotification({ title, message, variant }) {
  const notificationCtx = useContext(NotificationContext);

  return (
    <div
      className={`App-notification ${variant}`}
      onClick={notificationCtx.hideNotification}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
