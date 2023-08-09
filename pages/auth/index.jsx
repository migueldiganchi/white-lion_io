import AppButton from "@/components/IO/AppButton";

export default function AuthPage() {
  const start = () => {
    alert("Start here!");
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
        <p className="mt-6 leading-6 text-[24.3px] max-w-[333px] font-thin text-center mx-auto text-white">
          <b>
            Bienvenid@ al portal de autenticación, donde la inteligencia
            artificial te guía hacia la innovación.
          </b>
        </p>
      </div>
    </div>
  );
}
