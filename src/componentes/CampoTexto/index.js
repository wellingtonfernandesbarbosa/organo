import "./CampoTexto.css";

const CampoTexto = ({
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  const placeholdModificada = `${placeholder}...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholdModificada}
      />
    </div>
  );
};

export default CampoTexto;
