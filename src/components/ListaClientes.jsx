import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack
} from "@mui/material";
import Cliente from "./Cliente";



function ListaClientes({ clientes, subirCupo }) {
  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {clientes.map((cliente) => (
        <Card key={cliente.id}>
          <CardContent>
            <Typography variant="h6">
              {cliente.nombre}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {/* 👁️ VER SALDO */}
              <Button
                variant="outlined"
                onClick={() =>
                  alert(`Saldo de ${cliente.nombre}: $${cliente.saldo}`)
                }
              >
                Ver saldo
              </Button>

              {/* ➕ SUBIR CUPO */}
              <Button
                variant="contained"
                onClick={() => subirCupo(cliente.id)}
              >
                Subir cupo
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default ListaClientes;
