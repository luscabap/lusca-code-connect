import type { Metadata } from "next";
import './globals.css';

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
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
