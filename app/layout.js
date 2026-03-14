import "./globals.css";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "VIDYA",
  description: "A Media Server for Video Lectures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
