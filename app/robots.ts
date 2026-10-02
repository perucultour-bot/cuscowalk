import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/gracias",
    },
    sitemap: "https://cuscowalk.com/sitemap.xml",
  };
}
