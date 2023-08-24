import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores}) => {
    const sectionStyles = { backgroundColor: time.corSecundaria }
    const h3Styles = {color: time.corPrimaria}

    return (
        (colaboradores.length > 0) && <section className='time' style={sectionStyles}>
            <h3 style={h3Styles}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador 
                    key={indice}
                    colaborador={colaborador}
                    corPrimaria={time.corPrimaria}
                />)}
            </div>
        </section>
    )
}

export default Time