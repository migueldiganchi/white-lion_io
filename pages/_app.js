import Head from "next/head";
import AppFooter from "../components/AppFooter";

import { NotificationContextProvider } from "@/store/notification-context";

import "../styles/app.scss";
import "../styles/app-assistant.scss";
import AppBackground from "@/components/AppBackground";

function WhiteLionApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      {/*  Head */}
      <Head key="head">
        <title>White Lion - AI Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
          name="viewport"
        />
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css"
        />
      </Head>

      {/* Background effect */}
      <AppBackground />

      {/* Body */}
      <div key="whiteLionApp" className="rounded-xl text-center main-box">
        <Component key="body" {...pageProps} />
      </div>

      {/* // Footer */}
      <div key="footer-box" className="text-center">
        <AppFooter />
      </div>
    </NotificationContextProvider>
  );
}

export default WhiteLionApp;
