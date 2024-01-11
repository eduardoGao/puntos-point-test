import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import type { SalesMonth } from "@/interfaces";
import { formatAmountValue } from "@/utils";
import { ItemCard } from "./item-card";

interface CardProps extends SalesMonth {
  isActive: boolean;
}

export const CardMonthly = ({
  month,
  clients,
  balance,
  total,
  cashback,
  isActive,
}: CardProps) => {
  const cardItems = useMemo(
    () => [
      { label: "Clientes", value: formatAmountValue(clients) },
      { label: "Ventas totales", value: formatAmountValue(balance) },
      { label: "Monto total", value: formatAmountValue(total) },
    ],
    [clients, balance, total]
  );

  const cashbackItems = useMemo(
    () =>
      cashback.invoices.map((item) => ({
        label: `Facturado ${item.date}`,
        value: formatAmountValue(item.value),
      })),
    [cashback.invoices]
  );

  return (
    <Box
      bgcolor="white"
      borderRadius={2}
      border={1}
      borderColor="secondary.main"
      mb={2}
      p={2}
    >
      <Typography component="h4" textAlign="center" textTransform="capitalize">
        {month}
      </Typography>

      {cardItems.map((item, idx) => (
        <ItemCard key={idx} isActive={isActive} {...item} />
      ))}

      <Typography my={1} fontWeight="bold">
        Cashback
      </Typography>
      <ItemCard
        isActive={isActive}
        label="Acumulado"
        value={formatAmountValue(cashback.total)}
      />
      {cashbackItems.map((item, idx) => (
        <ItemCard
          key={idx}
          isActive={isActive}
          label={item.label}
          value={`$${item.value}`}
        />
      ))}
    </Box>
  );
};
