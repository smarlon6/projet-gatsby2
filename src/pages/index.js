import * as React from "react";
import { Link } from "gatsby"; // Import para navegação
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="home">
        <section className="hero">
          <h3>Bem-vindo à página inicial</h3>
          <p>Explore nossos serviços clicando nas opções abaixo:</p>
        </section>
        <section className="features">
          <div className="services">
            <div className="service">
              <h4>Consulta de Filmes</h4>
              <p>
                Pesquise detalhes sobre filmes, incluindo sinopses, elenco e avaliações.
              </p>
              <Link to="/movies" className="btn">
                Acessar Serviço
              </Link>
            </div>
            <div className="service">
              <h4>Consulta de CEP</h4>
              <p>
                Encontre informações sobre endereços a partir de um CEP válido.
              </p>
              <Link to="/cep" className="btn">
                Acessar Serviço
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const Head = () => <title>Home | My Awesome Site</title>;
