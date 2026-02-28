"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-soul-dark text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm md:text-base">
          Usamos cookies para melhorar sua experiência. Ao continuar navegando,
          você concorda com nossa{" "}
          <Link
            href="/politica-de-cookies"
            className="underline underline-offset-2 text-soul-yellow"
          >
            Política de Cookies
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            className="bg-soul-yellow text-soul-dark hover:bg-yellow-400 rounded-full"
            onClick={handleAccept}
          >
            Aceitar
          </Button>
          <Link href="/politica-de-cookies">
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full"
            >
              Configurar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}