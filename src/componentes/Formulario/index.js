import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Formulário submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa obrigatorio={true} itens={times} label="Time"/>
            <Botao>
                Criar card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario;