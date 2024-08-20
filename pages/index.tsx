import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import MainBanner from "@/components/MainBanner";
import About from "@/components/About";
import AboutTwo from "@/components/AboutTwo";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <MainBanner />
      <About />
      <AboutTwo />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}
