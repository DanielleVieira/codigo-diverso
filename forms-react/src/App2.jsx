// Form do React não controlado

import { useRef } from "react";

const App2 = () => {
  const fieldNome = useRef(null); // o useRef é usado para acessar o elemento sem usar o document.getElement ou querySelect
  const fieldEmail = useRef(null); // fieldEmail vai ter um obj com a propriedade current q tem o elemento input de email
  const fieldSenha = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); //previne o comportamento padrão do submite de redirecionar ou recarregar a página
    console.log({
      nome: fieldNome.current.value,
      email: fieldEmail.current.value,
      senha: fieldSenha.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Form não Controlado</legend>
        <article className="input">
          <label htmlFor="nome2">Nome</label>
          <br />
          <input
            type="text"
            name="nome2"
            id="nome2"
            placeholder="digite seu nome ..."
            ref={fieldNome} // usado para preencher o useRef com o elemento
          />
        </article>
        <article className="input">
          <label htmlFor="email2">Email</label>
          <br />
          <input
            type="email"
            name="email2"
            id="email2"
            placeholder="digite seu email ..."
            ref={fieldEmail}
          />
        </article>
        <article className="input">
          <label htmlFor="senha2">Senha</label>
          <br />
          <input
            type="password"
            name="senha2"
            id="senha2"
            placeholder="digite sua senha ..."
            ref={fieldSenha}
          />
        </article>
        <button type="submit">Enviar</button>
      </fieldset>
    </form>
  );
};

export default App2;
