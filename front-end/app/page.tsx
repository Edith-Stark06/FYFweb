import { Content } from "next/font/google";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import Footer from "./components/footer/Footer";
import Content1 from "./components/content/Content";

export default function Home() {
  return (
  <>
  <Header />
  <Content1 />
  <Hero />
  <Footer />
  </>
  );
}
