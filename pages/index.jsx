import { useContext, useEffect, useState } from "react";

import AppNotification from "@/components/AppNotification";
import AppButton from "../components/IO/AppButton";
import NotificationContext from "@/store/notification-context";
import AppFeatures from "@/components/AppFeatures";
import AppAssistant from "@/components/AppAssistant";

export default function HomePage() {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  const [isAssistantOn, setIsAssistantOn] = useState(false);

  const startConnection = () => {
    alert("@todo: Start Connection");
  };

  const showFeature = (feature) => {
    alert(`@todo: Show this feature ${feature.title}`);
  };

  const featuresData = [
    {
      id: 6,
      title: "Excelencia en Cada Paso",
      imageUrl: "/media/lux-droplet.png",
    },
    {
      id: 1,
      title: "Soluciones Personalizadas",
      imageUrl: "/media/features/customized.png",
    },
    {
      id: 2,
      title: "Equipo Multidisciplinario",
      imageUrl: "/media/features/experts.png",
    },
    {
      id: 3,
      title: "Innovación Disruptiva",
      imageUrl: "/media/features/innovation.png",
    },
    {
      id: 4,
      title: "Relaciones Estratégicas Duraderas",
      imageUrl: "/media/features/strategy.png",
    },
    {
      id: 5,
      title: "Inteligencia Artificial Avanzada",
      imageUrl: "/media/features/ai.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsAssistantOn(true);
    }, 999);
  }, []);

  return (
    <div
      key="main"
      className="App-main py-12 px-9 max-w-[1200px] animate__animated animate__fadeIn animate_slower"
    >
      {/* Notification */}
      {activeNotification && (
        <AppNotification
          title={activeNotification.title}
          message={activeNotification.message}
          variant={activeNotification.variant}
        />
      )}

      {/* Assistant */}
      {false && <AppAssistant isOn={isAssistantOn} />}

      {/* Main Box */}
      <div className="mx-6 sm:mx-9 p-9 mb-9">
        {/* Logo Image */}
        <div className="App-logo_box text-center">
          <img
            src={"/media/lion.png"}
            alt="Vercel Logo"
            layout="fill"
            className="App-logo"
          />
        </div>

        {/* Title */}
        <h3 className="text-5xl sm:text-6xl mb-9 font-bold">
          <b className="text-white">White </b>Lion
        </h3>

        {/* Description */}
        <p className="mt-6 leading-8 max-w-[450px] font-thin text-center mx-auto text-white text-3xl">
          Únete a la <b>épica</b> odisea <b className="text-gold">reservada</b>{" "}
          para los audaces <b>exploradores del futuro</b>.
        </p>
      </div>

      {/* Purpose Box */}
      <div className="App-box mx-6 sm:mx-9 p-9 bg-dark-gradient mb-9">
        <div className="sm:grid sm:grid-cols-2 sm:justify-center sm:items-center">
          <div className="order-first sm:order-last mb-6 sm:mb-0">
            <img
              src={"/media/features/vr.png"}
              alt="Vercel Logo"
              layout="fill"
              className="mx-auto w-[240px]"
            />
          </div>
          <div className="order-last sm:order-first sm:text-right font-thin">
            <span className="text-xl block mb-9 pb-3">
              Nuestro <b>asistente virtual</b> te guiará a través de un mundo de
              contenidos fascinantes, mientras responde tus preguntas con
              información precisa y útil. Explora sin límites, con un compañero
              virtual que está siempre a tu lado, llevando la{" "}
              <b>inmersión a un nuevo nivel</b>.
            </span>

            <AppButton variant="primary" className="text-white" href="/tour">
              Visita Virtual <i className="mdi mdi-arrow-right ml-2" />
            </AppButton>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white mt-12 py-6 max-w-[333px] mx-auto text-2xl">
        {/* Descubre el Encanto Oculto de los Mares */}
      </h3>

      {/* Information */}
      <div className="my-9 pb-12 sm:grid sm:grid-cols-2 sm:justify-center sm:items-center">
        <div className="order-first sm:text-right px-0 sm:pr-3">
          <img
            src={"/media/diamond.png"}
            alt="Vercel Logo"
            className="mx-auto w-[243px]"
          />
        </div>
        <div className="order-last sm:text-left sm:px-9 p-9 text-2xl">
          Enigma y conocimiento convergen en nuestra plataforma inteligente, un
          intrigante viaje hacia el misterio que te rodea. Descubre el fulgor
          del diamante dorado, desvela tesoros ocultos y expande tus horizontes
          hacia la grandeza.
        </div>
      </div>

      {/* Information */}
      <div className="mt-9 mb-12 pb-12 sm:grid sm:grid-cols-2 sm:justify-center sm:items-center">
        <div className="order-first sm:order-last">
          <img
            src={"/media/yacht.png"}
            alt="Vercel Logo"
            className="mx-auto w-[270px]"
          />
        </div>
        <div className="order-last sm:order-first sm:text-right p-9 text-2xl">
          Aquí, lo extraordinario se vuelve real y los sueños toman forma. Estás
          invitado a un universo donde la magia de la{" "}
          <b>Inteligencia Artificial</b> se fusiona con la realidad, brindándote
          oportunidades únicas y emocionantes
          <br />
          <br />
        </div>
      </div>

      {/* Features List */}
      <AppFeatures features={featuresData} onFeatureClick={showFeature} />

      {/* Title */}
      <h1 className="text-white mt-12 pt-6 max-w-[333px] mx-auto text-2xl">
        Un Mundo Virtual Sin Límites
      </h1>

      {/* Subtitle */}
      <h3 className="text-xl mb-12 mt-3 pb-6 font-thin max-w-[300px] mx-auto">
        Transformando Horizontes, Innovando Realidades
      </h3>

      {/* Actions Box */}
      <div className="mx-auto max-w-[600px] mb-9 mx-auto px-5">
        {/* Box 1 */}
        <div className="App-box bg-dark-gradient App-auth-box p-9 mr-0 mb-9">
          <b className="text-xl">Trasciende las Olas</b>

          <p className="mt-9 font-thin text-xl">
            Despierta tu espíritu aventurero en{" "}
            <b>
              <span className="text-white">White</span> Lion
            </b>{" "}
            y descubre un mundo de emociones sobre el agua. Nuestra plataforma
            te ofrece la llave para navegar hacia horizontes desconocidos y
            vivir la experiencia definitiva en yates privados.{" "}
          </p>
        </div>

        {/* Box 2 */}
        <div className="App-box bg-dark-gradient App-auth-box p-9 ml-0">
          <b className="text-xl">El Secreto de los Mares</b>

          <p className="mt-9 font-thin text-xl">
            En{" "}
            <b>
              <span className="text-white">White</span> Lion
            </b>
            , te invitamos a descubrir un secreto exclusivo. Nuestra plataforma
            es el camino hacia la conexión con los yates más lujosos y
            exclusivos del mundo. Nuestros expertos en el arte de la navegación
            te guiarán hacia un mundo de elegancia y sofisticación.
          </p>

          <div className="mt-9">
            <AppButton onClick={startConnection}>
              Conectar{" "}
              <i className="mdi mdi-location-enter ml-2 relative top-[2px]" />
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
