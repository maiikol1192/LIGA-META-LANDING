"use client";

import Image from "next/image";
import LogoImage from "@/app/assets/images/logo.webp";
import CoverImage from "@/app/assets/images/cover.webp";

const Home = () => {
  const redirectToFacebook = () => {
    const isMobile =
      /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(
        navigator.userAgent,
      );
    if (isMobile) {
      window.location.href = "fb://page/100064789524483";
      setTimeout(() => {
        window.open(
          "https://www.facebook.com/ligadefutbolmeta",
          "_blank",
          "noopener,noreferrer",
        );
      }, 500);
    } else {
      window.open(
        "https://www.facebook.com/ligadefutbolmeta",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const redirectToInstagram = () => {
    const isMobile =
      /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(
        navigator.userAgent,
      );
    if (isMobile) {
      window.location.href = "instagram://user?username=lifutmeta";
      setTimeout(() => {
        window.open(
          "https://www.instagram.com/lifutmeta/?hl=es",
          "_blank",
          "noopener,noreferrer",
        );
      }, 500);
    } else {
      window.open(
        "https://www.instagram.com/lifutmeta/?hl=es",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <div className="flex flex-col p-5 sm:p-10 bg-emerald-50 h-dvh overflow-y-auto">
      <div className="bg-white rounded-2xl w-full grid grid-cols-3 shadow-xl shadow-emerald-500/20 flex-1">
        <Image
          src={CoverImage}
          alt="Logo"
          className="h-full w-full object-cover object-center rounded-l-2xl hidden sm:block"
        />
        <div className="col-span-3 sm:col-span-2 flex flex-col gap-5 items-center justify-center p-5 text-center max-w-2xl m-auto">
          <Image
            src={LogoImage}
            alt="Logo"
            className="w-full max-w-[14rem] h-full object-cover object-center"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800">
              Página en construcción
            </h1>
            <p className="text-xl sm:text-2xl text-main">
              Oops! Estás pisando terreno fuera de juego ⚽
            </p>
          </div>
          <p className="text-sm sm:text-base font-light">
            Pero no te preocupes—muy pronto estaremos listos para el gran
            partido. Mientras tanto, síguenos en Facebook y mantente al tanto de
            todas las novedades de la liga.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <button
              onClick={redirectToFacebook}
              className="bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors duration-300 cursor-pointer text-sm sm:text-base"
            >
              Visítanos en Facebook
            </button>
            <button
              onClick={redirectToInstagram}
              className="border border-emerald-800 text-emerald-800 px-6 py-3 rounded-lg hover:bg-emerald-900 hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base"
            >
              Visítanos en Instagram
            </button>
          </div>
        </div>
      </div>
      <footer className="px-6 sm:px-10 pt-10 flex items-center justify-between text-center mx-auto">
        <p className="text-xs text-emerald-900/70">
          © {new Date().getFullYear()} Liga de Fútbol del Meta. Todos los
          derechos reservados. Hecho con pasión por el fútbol.
        </p>
      </footer>
    </div>
  );
};

export default Home;
