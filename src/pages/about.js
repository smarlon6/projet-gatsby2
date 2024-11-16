import React from "react";
import Layout from "../components/Layout";

export default function About () {
  return (
    <Layout>
      <main className="about-page">
        <section className="about-content">
          <h2>Quem Somos</h2>
          <p>
          Somos uma agência criativa comprometida em entregar resultados 
          excepcionais em branding, design e comunicação. Nossa equipe se 
          dedica a criar soluções exclusivas adaptadas às suas necessidades.
          </p>
          <h2>Nossa Missão</h2>
          <p>
          Capacitar as empresas com estratégias inovadoras e 
          impactantes que ressoam com seu público e promovem o crescimento.
          </p>
        </section>
      </main>
    </Layout>
  );
};


