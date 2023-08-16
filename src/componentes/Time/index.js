import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const sectionStyles = { backgroundColor: props.corSecundaria }
    const h3Styles = {color: props.corPrimaria}

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={sectionStyles}>
            <h3 style={h3Styles}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador 
                    key={colaborador.nome} nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section> : ''
    )
}

export default Time