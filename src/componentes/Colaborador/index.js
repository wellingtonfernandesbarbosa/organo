import './Colaborador.css';

const Colaborador = ({colaborador, corPrimaria}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodapeColaborador'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;