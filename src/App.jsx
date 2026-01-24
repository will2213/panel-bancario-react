import { useState } from "react";
import ListaClientes from "./components/ListaClientes";

function App() {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: "Juan Pérez", saldo: 1200 },
    { id: 2, nombre: "María Gómez", saldo: 800 },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState("");

  const agregarCliente = () => {
    if (nuevoNombre.trim() === "") return;

    setClientes([
      ...clientes,
      {
        id: clientes.length + 1,
        nombre: nuevoNombre,
        saldo: 0,
      },
    ]);

    setNuevoNombre("");
  };

  return (
    <div>
      <h1>Panel Bancario</h1>

      <input
        type="text"
        placeholder="Nombre del cliente"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
      />

      <button onClick={agregarCliente}>Agregar cliente</button>

      <ListaClientes clientes={clientes} />
    </div>
  );
}

export default App;
