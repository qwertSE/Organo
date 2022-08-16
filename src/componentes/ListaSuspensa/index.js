import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="ListaSuspensa">
      <label>{props.label}</label>
      <select
        onChange={evento => props.aoAlterar(evento.target.value)}
        value={props.valor}
        required={props.required}
      >
        <option></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
