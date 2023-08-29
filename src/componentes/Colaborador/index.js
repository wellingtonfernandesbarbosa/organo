import { AiFillCloseCircle } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({ colaborador, cor, aoDeletar }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="deletar"
        size={25}
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={colaborador.imagem} alt={colaborador.nome}></img>
      </div>
      <div className="rodapeColaborador">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
