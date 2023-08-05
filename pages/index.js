import AppButton from "../components/IO/AppButton";

export default function HomePage() {
  const startConnection = () => {
    alert("@todo: Start Connection");
  };

  return (
    <div className="App-main py-12 px-9 max-w-[1200px] animate__animated animate__fadeIn animate_slower">
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
              className="App-logo"
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

            <AppButton
              variant="primary"
              className="text-white"
              onClick={startConnection}
            >
              ¿Cómo ingreso?
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
            className="App-logo w-1/2"
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
            className="App-logo"
          />
        </div>
        <div className="order-last sm:order-first sm:text-right p-9 text-xl font-thin">
          Aquí, lo extraordinario se vuelve real y los sueños toman forma. Estás
          invitado a un universo donde la magia de la{" "}
          <b>Inteligencia Artificial</b> se fusiona con la realidad, brindándote
          oportunidades únicas y emocionantes
        </div>
      </div>

      {/* Actions Box */}
      <div className="sm:grid sm:grid-cols-2 sm:justify-center sm:items-start mx-9">
        {/* Signin Box */}
        <div className="App-box bg-dark-gradient App-auth-bo p-9 mr-0 sm:mr-5">
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

          <div className="mt-9">
            <AppButton variant="primary" onClick={startConnection}>
              ¿Qué es esto?
            </AppButton>
          </div>
        </div>

        {/* Signup Box */}
        <div className="App-box bg-dark-gradient App-auth-box p-9 ml-0 sm:ml-5 mt-9 sm:mt-0">
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
            <AppButton variant="primary" onClick={startConnection}>
              ¡Vamos!
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
