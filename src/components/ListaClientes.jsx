import Cliente from "./Cliente";

function ListaClientes({ clientes }) {
  return (
    <div>
      {clientes.map((cliente) => (
        <Cliente
          key={cliente.id}
          nombre={cliente.nombre}
          saldo={cliente.saldo}
        />
      ))}
    </div>
  );
}

export default ListaClientes;
