import { useState } from "react";

function Cliente({ nombre, saldo }) {
  const [mostrarSaldo, setMostrarSaldo] = useState(false);

  return (
    <div>
      <p>{nombre}</p>

      <button onClick={() => setMostrarSaldo(!mostrarSaldo)}>
        {mostrarSaldo ? "Ocultar saldo" : "Ver saldo"}
      </button>

      {mostrarSaldo && <p>Saldo: ${saldo}</p>}
    </div>
  );
}

export default Cliente;
