"use client";
import Educacion from "@/components/Educa-com";
import Footer from "@/components/Foot-com";
import Presentacion from "@/components/Iam-com";
import Navbar from "@/components/Nav-com";
import Projectos from "@/components/Proj-com";
import Separador from "@/components/Separa-com";
import Tecnos from "@/components/Stack-com";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSpan, setShowSpan] = useState(true);

  useEffect(() => {
    if (showSpan) {
      setTimeout(() => {
        setShowSpan(false);
      }, 5000);
    }
  }, [showSpan]);

  return (
    <div className="">
      {/* <div className="flex justify-center">
        {showSpan && (
          <span className="text-7xl fixed bg-amber-400 m-20 p-10 z-20 rounded">
            This Portfolio is building...
          </span>
        )}
      </div> */}
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
