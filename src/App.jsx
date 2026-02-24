import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Button
} from "@mui/material";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@mui/material";
import { useState } from "react";
import ListaClientes from "./components/ListaClientes";

function App() {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: "Juan Pérez", saldo: 1200 },
    { id: 2, nombre: "María Gómez", saldo: 800 },
    { id: 3, nombre: "Carlos Rodríguez", saldo: 1500 },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoCupo, setNuevoCupo] = useState("");
  const [movimientos, setMovimientos] = useState([]);

 const agregarCliente = () => {
  if (nuevoNombre.trim() === "") return;

  setClientes([
    ...clientes,
    {
      id: clientes.length + 1,
      nombre: nuevoNombre,
      saldo: Number(nuevoCupo) || 0,
    },
  ]);

  // registrar movimiento inicial
  if (Number(nuevoCupo) > 0) {
    setMovimientos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        clienteId: clientes.length + 1,
        tipo: "CUPO INICIAL",
        monto: Number(nuevoCupo),
        fecha: new Date().toISOString(),
      },
    ]);
  }

  setNuevoNombre("");
  setNuevoCupo("");
};

  const subirCupo = (idCliente) => {
    if (nuevoCupo === "" || Number(nuevoCupo) <= 0) return;

    setClientes((prev) =>
      prev.map((cliente) =>
        cliente.id === idCliente
          ? { ...cliente, saldo: cliente.saldo + Number(nuevoCupo) }
          : cliente
      )
    );

    const nuevoMovimiento = {
      id: movimientos.length + 1,
      clienteId: idCliente,
      tipo: "CUPO",
      monto: Number(nuevoCupo),
      fecha: new Date().toISOString(),
    };

    setMovimientos((prev) => [...prev, nuevoMovimiento]);
    setNuevoCupo("");
  };

 return (
  <Container maxWidth="md">

    {/* 🔵 BARRA SUPERIOR */}
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Banco Demo
        </Typography>
      </Toolbar>
    </AppBar>

    {/* 📊 TARJETAS RESUMEN */}
    <Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={12} md={6}>
       <Card
  sx={{
    borderRadius: 3,
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  }}
>
  <CardContent>
    <Typography variant="subtitle2" color="text.secondary">
      Total clientes
    </Typography>

    <Typography variant="h4" fontWeight="bold">
      {clientes.length}
    </Typography>
  </CardContent>
</Card>
      </Grid>

      <Grid item xs={12} md={6}>
       <Card
  sx={{
    borderRadius: 3,
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  }}
>
  <CardContent>
    <Typography variant="subtitle2" color="text.secondary">
      Capital total
    </Typography>

    <Typography variant="h4" fontWeight="bold" color="primary">
      ${clientes.reduce((acc, c) => acc + c.saldo, 0)}
    </Typography>
  </CardContent>
</Card>
      </Grid>
    </Grid>

    {/* 🧾 HISTORIAL */}
    <Typography variant="h5" sx={{ mt: 4 }}>
      Historial de movimientos
    </Typography>
<Paper sx={{ mt: 4 }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Cliente</TableCell>
        <TableCell>Tipo</TableCell>
        <TableCell>Monto</TableCell>
        <TableCell>Fecha</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {movimientos.map((mov) => (
        <TableRow key={mov.id}>
          <TableCell>{mov.clienteId}</TableCell>
          <TableCell>{mov.tipo}</TableCell>
          <TableCell>${mov.monto}</TableCell>
          <TableCell>
            {new Date(mov.fecha).toLocaleString()}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Paper>

    {/* ➕ FORMULARIO */}
   <Stack spacing={2} sx={{ mt: 3 }}>
  <TextField
    label="Nombre del cliente"
    fullWidth
    value={nuevoNombre}
    onChange={(e) => setNuevoNombre(e.target.value)}
  />

  <TextField
    label="Monto del cupo"
    type="number"
    fullWidth
    value={nuevoCupo}
    onChange={(e) => setNuevoCupo(e.target.value)}
  />

 <Button
  variant="contained"
  size="large"
  fullWidth
  sx={{ mt: 2, py: 1.2 }}
>
  Agregar cliente
</Button>
</Stack>

    {/* 👥 LISTA */}
    <ListaClientes
      clientes={clientes}
      subirCupo={subirCupo}
    />

  </Container>
);
}

export default App;

