const Explorez = () => {
  return (
    <div className="relative h-svh">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover object-center w-ful h-full absolute top-0 left-0"
      >
        <source src="video-accueil.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col gap-8 py-20 justify-end items-center h-full relative z-10 font-bold text-white">
        <p className="text-sm">Homme</p>
        <h1 className=" text-3xl ">Printemps - Été 2024</h1>
        <button className="border-2 border-white px-4 py-2 rounded-full mt-4 backdrop-blur-lg">
          Découvrir la collection
        </button>
      </div>
    </div>
  );
};

export default Explorez;
