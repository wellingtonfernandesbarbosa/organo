import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholdModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholdModificada} />
        </div>
    );
}

export default CampoTexto;