import { NextPage } from "next";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Category from "../components/Home/Category";
import Intro from "../components/Home/Intro";
import Nfts from "../components/Home/Nfts";

const Home: NextPage = () => {
  useEffect(() => {}, []);

  return (
    <main>
      <Intro />
      <Category />
      <Nfts />
    </main>
  );
};

export default Home;
