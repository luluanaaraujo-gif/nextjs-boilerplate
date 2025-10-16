export const metadata = {
  title: "Obrigado! Pagamento recebido",
  description:
    "Acesse seu grupo e confira as instruções que enviamos por e-mail.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
      <h1>🎉 Obrigado pelo seu pagamento!</h1>
      <p style={{ marginTop: 8 }}>
        Em alguns minutos você receberá um e-mail com seu acesso.
      </p>
      <p style={{ marginTop: 8 }}>
        Se ainda não entrou no grupo do WhatsApp, volte à página do programa e
        clique no botão <strong>“Entrar no grupo”</strong>.
      </p>
      <a
        href="https://wa.me/5521997331448"
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "10px 16px",
          background: "#0ea5e9",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Falar com a professora no WhatsApp
      </a>
    </main>
  );
}
