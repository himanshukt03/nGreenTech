import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "nGreenTech",
    short_name: "nGreenTech",
    description:
      "nGreenTech empowers student-led sustainability missions focused on e-waste circularity and climate action.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FCFA",
    theme_color: "#1B9E3F",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
