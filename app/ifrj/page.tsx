import LandingFactory from "../components/LandingFactory";

export const metadata = {
  title: "Mentoria IFRJ — Revisões objetivas e simulados",
  description:
    "Conteúdo no formato da banca, revisões rápidas e comunidade de apoio.",
  openGraph: {
    images: ["/assets/ifrjimagem.png"],
  },
};

export default function Page() {
  return <LandingFactory siteKey="IFRJ" />;
}
