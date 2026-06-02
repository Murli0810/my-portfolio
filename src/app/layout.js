import { Geist, Geist_Mono, Shrikhand, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shrikhand = Shrikhand({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  display: 'swap',
});


export const metadata = {
  title: "Murli's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${shrikhand.variable} ${poppins.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
