import type { Metadata } from "next";
import './globals.css';
import { Aside } from "@/components/Aside";
import { Prompt } from "next/font/google"
import { Pesquisa } from "@/components/Pesquisa";

const prompt = Prompt({
  weight: ["400", "600", "700"],
  subsets: ['latin'],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para Devs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          <div>
            <Pesquisa textoBotao="Buscar" textoInput="Digite o que você procura"/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
