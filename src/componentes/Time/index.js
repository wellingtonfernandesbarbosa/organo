import './Time.css';

const Time = (props) => {
    const sectionStyles = { backgroundColor: props.corSecundaria };
    const h3Styles = {color: props.corPrimaria};

    return (
        <section className='time' style={sectionStyles}>
            <h3 style={h3Styles}>{props.nome}</h3>
        </section>
    );
}

export default Time;