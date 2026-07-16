const baseUrl = "https://iamabdullah.net"; // Replace with your domain

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}