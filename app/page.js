import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Operations from "@/components/Operations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className={ styles.container}>
      <Header />
      <About />
      <Services />
      <Operations />
      <Contact />
   </main>
  );
}
