import LandingFactory from "../components/LandingFactory";

export const metadata = {
  title: "Mentoria UERJ — Química sem mistério",
  description:
    "Questões da banca, revisões objetivas e trilhas diretas ao ponto.",
  openGraph: {
    images: ["/assets/uerjimagem.png"],
  },
};

export default function Page() {
  return <LandingFactory siteKey="UERJ" />;
}
