import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iTasks',
    short_name: 'iTasks',
    description: 'iTasks — simplifying task management with seamless efficiency and mastering your time effectively',
    start_url: '/',
    display: 'standalone',
    orientation: "portrait",
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/icon-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
  }
}
