import type { CustomersData } from "@/interfaces";
import { CheckCircle } from "@mui/icons-material";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Paper,
} from "@mui/material";

const rows = ["Nombre", "Nuevo Cliente", "Compró", "Fecha"];

export const TableData = ({ customers }: { customers: CustomersData[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows.map((row) => (
              <TableCell key={row} align="center">
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row) => (
            <TableRow key={row.name} data-testid="customer">
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                {row.isNew && <CheckCircle color="secondary" />}
              </TableCell>
              <TableCell align="center">
                {row.havePurchase && <CheckCircle color="secondary" />}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
