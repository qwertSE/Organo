import "./CampoTexto.css";


function CampoTexto(props) {

  /* Em desenvolvimento. */
  const novoValor = (evento) => {
    props.aoAlterar(evento.target.value);
    
    /* console.log(evento.target.value); */
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={novoValor}
        required={props.required}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default CampoTexto;
