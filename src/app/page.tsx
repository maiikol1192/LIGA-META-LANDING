const Home = () => {
  return (
    <div className="h-dvh flex flex-col gap-5 items-center justify-center bg-orange-50 p-5">
      <h1 className="text-4xl font-bold text-secondary text-center">
        Liga de futbol del Meta
      </h1>
      <p className="text-center text-main">
        © Todos los derechos reservados {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Home;
