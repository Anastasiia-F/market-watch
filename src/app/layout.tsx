import type { Metadata } from "next";
import "./globals.scss";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import 'primeicons/primeicons.css';
import Header from '@/app/components/header';



export const metadata: Metadata = {
  title: "Market Watch",
  description: "Created for demonstration purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body className="px-7">
              <header className="">
                  <Header />
              </header>

              <main className="container mx-auto max-w-screen-xl">
                  {children}
              </main>

              <footer className="container mx-auto max-w-screen-xl">

              </footer>
          </body>
        </html>
  );
}
