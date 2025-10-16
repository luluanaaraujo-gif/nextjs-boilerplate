import LandingFactory from "../components/LandingFactory";

export const metadata = {
  title: "Clube Aprova ENCCEJA — Estudo guiado e leve",
  description:
    "Aulas curtas, trilhas semanais e comunidade para conquistar seu diploma no ENCCEJA.",
  openGraph: {
    images: ["/assets/clubeenceeja.png"],
  },
};

export default function Page() {
  return <LandingFactory siteKey="ENCCEJA" />;
}
