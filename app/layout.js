import { Inter, Rubik, Roboto_Serif, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});
const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robot-serif",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-rubik ${rubik.variable} ${roboto_serif.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
