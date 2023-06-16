// Formulários controlados do React
// Formulários constrolados são a forma mais utilizada

import { useState } from "react";

const App = () => {
  const [field, setField] = useState({
    // usando um objeto para não ter que criar vários states para vários campos.
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value }); // o e.name entre [] é para acessar dinâmicamente a própriedade certa do obj fielde
  }; // o e.target pega o elemento

  return (
    <form>
      <fieldset>
        <legend>Form Controlado</legend>
        <article className="input">
          <label htmlFor="nome">Nome</label>
          <br />
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="digite seu nome ..."
            value={field.nome}
            onChange={handleChange}
          />
        </article>
        <article className="input">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="digite seu email ..."
            value={field.email}
            onChange={handleChange}
          />
        </article>
        <article className="input">
          <label htmlFor="senha">Senha</label>
          <br />
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="digite sua senha ..."
            value={field.senha}
            onChange={handleChange}
          />
        </article>
      </fieldset>
    </form>
  );
};

export default App;
