import Colaborador from "../Colaborador";
import "./team.css";

const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              corDeFundo={props.corPrimaria}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              img={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
