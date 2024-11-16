import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function CepPage() {
  const [cep, setCep] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (cep.length === 8) {
      const consultarCEP = async () => {
        const cepFormatted = cep.replace(/\D/g, "");

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
            setError(""); 
          }
        } catch (err) {
          setError("Ocorreu um erro ao consultar o CEP.");
          setResult(null);
        }
      };

      consultarCEP();
    }
  }, [cep]); 

  return (
    <Layout>
      <div className="cep-page">
        <h1>Consultar CEP</h1>
        <form onSubmit={(e) => e.preventDefault()}> {/* Evita o reload da página */}
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
}
