import { TableData } from "@/components";
import { useCustomers } from "@/hooks";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Clients() {
  const { data, isSuccess } = useCustomers("all");

  return (
    <>
      <Head>
        <title>Clients</title>
        <meta name="description" content="Puntos Point Clients" />
      </Head>

      <Box>
        <Typography component="h1" variant="h3" mb={2}>
          Clientes
        </Typography>

        {isSuccess && <TableData customers={data.customers} />}
      </Box>
    </>
  );
}
