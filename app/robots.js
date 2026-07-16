export default function robots() {
  const baseUrl = "https://iamabdullah.net"; // Replace with your domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}