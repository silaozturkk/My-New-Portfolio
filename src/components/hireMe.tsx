const HireMe = () => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">

      {/* Dönen yuvarlak yazı */}
      <svg
        className="absolute w-full h-full rotating-circle-text"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -70, 0
               a 70,70 0 1,1 140,0
               a 70,70 0 1,1 -140,0"
          />
        </defs>

        <text fontSize="" fill="black">
          <textPath href="#circlePath">
            Computer Engineering Student • Web Develepor •
          </textPath>
        </text>
      </svg>

      {/* Ortadaki Hire Me */}
      <div className="z-10">
        <p className="
          flex items-center justify-center
          w-24 h-24
          rounded-full
          border-2
          bg-white
          text-lg
          transition-colors
          duration-500
          hover:bg-black
          hover:text-white
        ">
          Hire Me
        </p>
      </div>

    </div>
  );
};

export default HireMe;
