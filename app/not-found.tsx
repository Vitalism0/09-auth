import type { Metadata } from "next";
import NotFoundRedirect from "@/components/NotFoundRedirect/NotFoundRedirect";

export const metadata: Metadata = {
  title: "404 | NoteHub",
  description:
    "404 — Page not found. The page you are looking for does not exist.",
  openGraph: {
    title: "404 | NoteHub",
    description:
      "404 — Page not found. The page you are looking for does not exist.",
    url: "https://08-zustand-gamma-blue.vercel.app/404",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub 404",
      },
    ],
  },
};

export default function NotFound() {
  return <NotFoundRedirect sec={3} />;
}
