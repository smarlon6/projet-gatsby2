import React, { useState } from "react";
import Layout from "../components/Layout";

export default function CepPage(){
  const [cep, setCep] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Função para consultar o CEP na API ViaCEP
  const consultarCEP = async (event) => {
    event.preventDefault();
    const cepFormatted = cep.replace(/\D/g, ""); // Remove caracteres não numéricos


    if (cepFormatted.length !== 8) {
      setError("Digite um CEP válido!");
      setResult(null);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepFormatted}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError("CEP não encontrado!");
        setResult(null);
      } else {
        setResult(data);
        setError(""); // Limpa o erro
      }
    } catch (err) {
      setError("Ocorreu um erro ao consultar o CEP.");
      setResult(null);
    }
  };

  return (
    <Layout>
      <div className="cep-page">
        <h1>Consultar CEP</h1>
        <form onSubmit={consultarCEP}>
          <input
            type="text"
            placeholder="Digite o CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            maxLength="8"
            required
          />
          <button type="submit">Consultar</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {result && (
          <div className="result">
            <p><strong>Logradouro:</strong> {result.logradouro}</p>
            <p><strong>Bairro:</strong> {result.bairro}</p>
            <p><strong>Cidade:</strong> {result.localidade}</p>
            <p><strong>UF:</strong> {result.uf}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
