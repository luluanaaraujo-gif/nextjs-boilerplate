import LandingFactory from "../components/LandingFactory";

export const metadata = {
  title: "Mentoria Express Pedro II — Revisão e simulados",
  description:
    "Plano prático, simulados comentados e grupo de apoio até a prova.",
  openGraph: {
    images: ["/assets/colegiocp2.png"],
  },
};

export default function Page() {
  return <LandingFactory siteKey="PedroII" />;
}
