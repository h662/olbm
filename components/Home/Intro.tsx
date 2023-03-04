import Image from "next/image";
import { FC } from "react";
import IntroGif from "../../public/images/intro.gif";

const Intro: FC = () => {
  return (
    <div className="relative flex justify-center items-center h-72 md:h-96">
      <div className="w-screen absolute top-0">
        <Image
          className="w-screen max-w-5xl mx-auto h-72 md:h-96 object-cover"
          src={IntroGif}
          alt="Intro"
        />
      </div>
      <h1 className="text-lg md:text-3xl z-30 bg-gray-300 bg-opacity-50 px-4 py-2 md:px-8 md:py-4 rounded-lg">
        Wear a <span className="font-bold">N</span>ext{" "}
        <span className="font-bold">F</span>ashion{" "}
        <span className="font-bold">T</span>echnology!
      </h1>
    </div>
  );
};

export default Intro;
