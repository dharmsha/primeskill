import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Prime Skill Technical Institute | Practical Repair Training",
  description:
    "Prime Skill Technical Institute, Patna में AC, Fridge, Washing Machine, PCB, Motor Winding और घरेलू मशीनों की practical training.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}