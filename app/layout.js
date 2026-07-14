import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdullah | Cloud Architect, Backend & DevOps Engineer Portfolio",
  description: "Portfolio of Abdullah, a self-driven Software Engineer specializing in scalable AWS cloud infrastructure, high-performance Node.js/TypeScript backend APIs, and modern DevOps/CI-CD pipelines.",
  keywords: [
    "Cloud Architect",
    "Backend Developer",
    "DevOps Engineer",
    "Next.js Developer",
    "AWS",
    "TypeScript",
    "Express API",
    "Docker",
    "CI/CD Pipelines",
    "Infrastructure as Code",
    "Serverless Architecture",
    "React Frontend"
  ],
  authors: [{ name: "Abdullah" }],
  creator: "Abdullah",
  metadataBase: new URL("https://iamabdullah.net"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdullah | Cloud Architect & Backend Engineer Portfolio",
    description: "Explore the portfolio of Abdullah, specializing in scalable AWS configurations, robust REST APIs, and automated DevOps architectures.",
    url: "https://iamabdullah.net", // Replace with your actual domain
    siteName: "Abdullah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Make sure to drop a 1200x630px social preview image inside your public folder
        width: 1200,
        height: 630,
        alt: "Abdullah Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah | Cloud Architect & Backend Engineer Portfolio",
    description: "AWS, Backend API design, DevOps automation, and modern frontend development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
