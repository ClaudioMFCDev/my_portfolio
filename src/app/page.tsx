"use client";
import Educacion from "@/components/Educa-com";
import Footer from "@/components/Foot-com";
import Presentacion from "@/components/Iam-com";
import Navbar from "@/components/Nav-com";
import Projectos from "@/components/Proj-com";
import Separador from "@/components/Separa-com";
import Tecnos from "@/components/Stack-com";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Presentacion />
        <Separador />
      <Tecnos />
        <Separador />
      <Projectos />
        <Separador />
      <Educacion />
        <Separador />
      <Footer />
    </div>
  );
}
