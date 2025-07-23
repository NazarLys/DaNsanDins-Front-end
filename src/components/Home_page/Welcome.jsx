import background from "../../assets/background.jpg";

const Welcome = () => {
  return (
    <section
      className="relative min-h-screen bg-[#D9D9D9] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0" />
      <div className="relative z-10 text-5xl font-light text-center space-y-4">
        <div className="flex justify-center gap-6 flex-wrap">
          <span>Create</span>
          <span>your</span>
          <span>own</span>
          <span>character</span>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <span>&</span>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <span>Enjoy</span>
          <span>the</span>
          <span>adventure</span>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
