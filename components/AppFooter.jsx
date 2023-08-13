import Link from "next/link";

const AppFooter = () => {
  return (
    <div className="App-footer my-12 pb-12">
      <Link href={"/"}>
        {" "}
        <b className="text-[21px] mb-3 block">
          <span className="text-white">White</span> Lion
        </b>
      </Link>
      <p className="text-[18px] max-w-[333px] mx-auto font-thin">
        ¿Estás listo para experimentar un nuevo nivel en los negocios?
      </p>
    </div>
  );
};

export default AppFooter;
