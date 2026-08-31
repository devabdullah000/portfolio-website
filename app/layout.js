import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/helper/scroll-to-top";

import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://iamabdullah.net";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Abdullah | Cloud Architect, Backend & DevOps Engineer",
    template: "%s | Abdullah",
  },

  description:
    "Portfolio of Abdullah, a Cloud Architect, Backend Engineer, and DevOps Engineer specializing in AWS, Node.js, TypeScript, Docker, Kubernetes, CI/CD, and scalable cloud infrastructure.",

  applicationName: "Abdullah Portfolio",

  authors: [
    {
      name: "Abdullah",
      url: siteUrl,
    },
  ],

  creator: "Abdullah",

  publisher: "Abdullah",

  keywords: [
    "Abdullah",
    "Cloud Architect",
    "Backend Engineer",
    "Backend Developer",
    "Software Engineer",
    "DevOps Engineer",
    "AWS",
    "Amazon Web Services",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "GitHub Actions",
    "Linux",
    "REST API",
    "Microservices",
    "Cloud Infrastructure",
    "Portfolio",
  ],

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abdullah Portfolio",

    title: "Abdullah | Cloud Architect, Backend & DevOps Engineer",

    description:
      "Cloud Architect specializing in AWS, scalable backend systems, DevOps automation, CI/CD pipelines, Docker, and modern web applications.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah | Cloud Architect & Backend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdullah | Cloud Architect, Backend & DevOps Engineer",
    description:
      "AWS • Node.js • Next.js • Docker • Kubernetes • DevOps • Backend Engineering",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  referrer: "origin-when-cross-origin",
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah",
    url: siteUrl,
    image: `${siteUrl}/profile.jpeg`,
    jobTitle: "Cloud Architect, Backend & DevOps Engineer",
    description:
      "Cloud Architect, Backend Engineer and DevOps Engineer specializing in AWS, scalable backend systems, Node.js, TypeScript, Docker, Kubernetes and CI/CD.",

    knowsAbout: [
      "AWS",
      "Cloud Architecture",
      "Backend Development",
      "Node.js",
      "TypeScript",
      "Next.js",
      "React",
      "Docker",
      "Terraform",
      "CI/CD",
      "DevOps",
      "REST APIs",
      "Microservices",
    ],

    sameAs: [
      "https://github.com/iamabdullah0811",
      "https://www.linkedin.com/in/mohammad-abdullah-45144b422/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <ToastContainer />

        <main className="relative mx-auto min-h-screen px-6 text-white sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>

        <Footer />
      </body>
    </html>
  );
}