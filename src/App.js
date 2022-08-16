import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Form";
import Team from "./componentes/Team";

/* Times

"Programação",
"Front-End",
"Data Science",
"Devops",
"Ux e Design",
"Mobile",
"Inovação e Gestão",
*/

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Ux e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [cards, setCard] = useState([]);

  const cadastro = (novoCard) => {
    /* Spread */
    setCard([...cards, novoCard]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario novoCard={(novoCard) => cadastro(novoCard)} />
      {times.map((time) => (
        <Team
          key={time.nome}
          name={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={cards.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
