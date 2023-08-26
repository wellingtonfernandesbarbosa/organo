import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  const sectionStyles = { backgroundColor: hexToRgba(time.cor, '0.4') };
  const h3Styles = { color: time.cor };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={sectionStyles}>
        <input
          type="color"
          className="input-color"
          onChange={evento => mudarCor(evento.target.value, time.nome)}
          value={time.cor}
        />
        <h3 style={h3Styles}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                colaborador={colaborador}
                cor={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
