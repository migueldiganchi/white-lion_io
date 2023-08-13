import { useContext } from "react";

import AppNotification from "@/components/AppNotification";
import AppButton from "../components/IO/AppButton";

import NotificationContext from "@/store/notification-context";

export default function HomePage() {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  const startConnection = () => {
    alert("@todo: Start Connection");
  };

  const showFeature = (feature) => {
    alert(`@todo: Show this feature ${feature.title}`);
  };

  const featuresData = [
    {
      id: 1,
      title: "Soluciones Personalizadas de Vanguardia",
      imageUrl: "/media/features/customized.png",
    },
    {
      id: 2,
      title: "Equipo Multidisciplinario de Expertos",
      imageUrl: "/media/features/experts.png",
    },
    {
      id: 3,
      title: "Enfoque en la Innovación Disruptiva",
      imageUrl: "/media/features/innovation.png",
    },
    {
      id: 4,
      title: "Relaciones Estratégicas y a Largo Plazo",
      imageUrl: "/media/features/strategy.png",
    },
  ];

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

      {/* Main Box */}
      <div className="mx-6 sm:mx-9 p-9 mb-6">
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
        <h3 className="text-3xl font-bold">
          Bienvenid@s a <b className="text-white">White </b>Lion
        </h3>

        {/* Description */}
        <p className="mt-6 leading-6 text-[21.6px] max-w-[333px] font-thin text-center mx-auto text-white">
          Adéntrate en un cosmos encantado con la <b>Inteligencia Artificial</b>
          &nbsp;como guía. Únete a la épica odisea{" "}
          <b className="text-gold">reservada</b> para los audaces exploradores
          del futuro.
        </p>
      </div>

      {/* Purpose Box */}
      <div className="App-box mx-9 sm:mx-9 p-9 bg-dark-gradient mb-9">
        <div className="sm:grid sm:grid-cols-2 sm:justify-center sm:items-center">
          <div className="order-first sm:order-last">
            <img
              src={"/media/diamond.png"}
              alt="Vercel Logo"
              layout="fill"
              className="mx-auto w-[270px]"
            />
          </div>
          <div className="order-last sm:order-first sm:text-right font-thin">
            <span className="text-xl block mb-9">
              Desvela la magia del <b>diamante dorado</b> en nuestro mundo de
              maravillas tecnológicas. Un viaje épico te aguarda, donde cada
              interacción brilla con conocimiento y revela{" "}
              <b>tesoros ocultos</b>. Únete a la revolución y convierte tus
              sueños en realidad. ¡Embárcate ahora en ElysiumAI y desvela
              secretos sin límites!
            </span>

            <AppButton variant="primary" className="text-white" href="/auth">
              Entrar
            </AppButton>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white mt-12 py-9 max-w-[333px] mx-auto text-xl">
        Descubre el Encanto Oculto de los Mares
      </h3>

      {/* Information */}
      <div className="my-9 pb-12 sm:grid sm:grid-cols-2 sm:justify-center sm:items-center">
        <div className="order-first sm:text-right px-0 sm:pr-3">
          <img
            src={"/media/lux-droplet.png"}
            alt="Vercel Logo"
            className="mx-auto w-[270px]"
          />
        </div>
        <div className="order-last sm:text-left sm:px-9 p-9 text-xl font-thin">
          Enigma y conocimiento convergen en nuestra plataforma inteligente, un
          intrigante viaje hacia el misterio que te rodea. Descubre el fulgor
          del diamante dorado, desvela tesoros ocultos y expande tus horizontes
          hacia la grandeza. Sumérgete en White Lion, donde el poder del enigma
          te inspira a explorar, aprender y alcanzar nuevas alturas. ¡Desata tu
          potencial y sé parte de este fascinante cosmos de sabiduría sin
          límites!
        </div>
      </div>

      {/* Information */}
      <div className="mt-9 mb-12 pb-12 sm:grid sm:grid-cols-2 sm:justify-center sm:items-center">
        <div className="order-first sm:order-last">
          <img
            src={"/media/yachting.png"}
            alt="Vercel Logo"
            className="mx-auto w-[270px]"
          />
        </div>
        <div className="order-last sm:order-first sm:text-right p-9 text-xl font-thin">
          Aquí, lo extraordinario se vuelve real y los sueños toman forma. Estás
          invitado a un universo donde la magia de la{" "}
          <b>Inteligencia Artificial</b> se fusiona con la realidad, brindándote
          oportunidades únicas y emocionantes
          <br />
          <br />
          {/* <a href="/tour" className="text-white">
            <u>Tour Virtual</u>
          </a> */}
          <AppButton href="/tour"> Tour Virtual </AppButton>
        </div>
      </div>

      {/* Actions Box */}
      <div className="mx-auto max-w-[600px] mb-9 mx-auto px-5">
        {/* Box 1 */}
        <div className="App-box bg-dark-gradient App-auth-box p-9 mr-0 mb-9">
          <b className="text-xl">Trasciende las Olas</b>

          <p className="mt-9 font-thin text-lg">
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

          <p className="mt-9 font-thin text-lg">
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
            <AppButton onClick={startConnection}>Conectar</AppButton>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white my-12 py-9 max-w-[333px] mx-auto text-2xl">
        Características
      </h1>

      {/* Features List */}
      <div className="project-list sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:justify-center sm:items-center">
        {featuresData.map((feature, index) => {
          return (
            <div className="App-box bg-dark-gradient p-6 m-4 mb-9 sm:mb-0">
              <img
                src={feature.imageUrl}
                alt="Vercel Logo"
                title={feature.title}
                className="mx-auto w-[120px] sm:w-[99px]"
              />
              <span className="block mt-6 mb-6 mx-auto">{feature.title}</span>
              <AppButton onClick={() => showFeature(feature)}>
                Ver más <i className="mdi mdi-information ml-2"></i>
              </AppButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
