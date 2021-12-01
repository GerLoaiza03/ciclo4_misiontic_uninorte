import { useRef, useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(0);
  const [incusuario, setIncusuario] = useState(0);

  const incusuarioRef = useRef();
  const incValor = () => {
    setValor(valor + 1);
  };

  const incValorEn = () => {
    setValor(valor + parseInt(incusuarioRef.current.value));
  };
  console.log("RENDERIZADO");
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-3">
        <button
          onClick={() => setValor(valor - 1)}
          className="btn btn-outline-light btn-lg"
        >
          <i className="bi bi-cloud-minus-fill text-info"></i>
        </button>

        <p className="display-1 fw-bold mx-3">{valor}</p>

        <button onClick={incValor} className="btn btn-outline-light btn-lg">
          <i className="bi bi-cloud-plus-fill text-info"></i>
        </button>
      </div>
      <div className="d-flex justify-content-center my-3">
        <input type="number" className="fw-bold" ref={incusuarioRef} />
        <button onClick={incValorEn} className="btn btn-outline-light btn-lg">
          <i className="bi bi-cloud-plus-fill text-info"></i>
        </button>
      </div>
      <div className="d-flex justify-content-center my-3">
        <input
          type="number"
          className="fw-bold"
          value={incusuario}
          onChange={(e) => setIncusuario(e.target.value)}
        />
        <button
          onClick={() => setValor(valor + parseInt(incusuario))}
          className="btn btn-outline-light btn-lg"
        >
          <i className="bi bi-cloud-plus-fill text-info"></i>
        </button>
      </div>
    </div>
  );
};

export default Contador;
