import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const times = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "Ux e Design",
  "Mobile",
  "Inovação e Gestão",
];

/* Pré-definido para teste. */
function Formulario(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(
      `O formulario de ${nome} no cargo de ${cargo} com a imagem no endereço ${imagem} e no time de ${time} foi enviado com sucesso!`
    );

    props.novoCard({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={submit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
          label="Time"
          itens={times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;
