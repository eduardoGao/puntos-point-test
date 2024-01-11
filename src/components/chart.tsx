import { useEffect, useState } from "react";
import type { Customers } from "@/interfaces";
import {
  BarPlot,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  ResponsiveChartContainer,
} from "@mui/x-charts";
import { orange, purple } from "@mui/material/colors";

export function Chart({
  customers,
  showCashback,
}: {
  customers: Customers;
  showCashback: boolean;
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const dataCustomers = {
    labels: ["Total", "Nuevos", "Compraron", "No compraron"],
    values: [
      customers.total,
      customers.newCustomers,
      customers.havePurchase,
      customers.notHavePurchase,
    ],
  };

  return isClient ? (
    <ResponsiveChartContainer
      series={[
        {
          type: "bar",
          data: dataCustomers.values,
          color: purple[100],
        },
        {
          type: "line",
          yAxisKey: "amount",
          color: orange[800],
          data: [1, 1, 3, 5, 1],
        },
      ]}
      xAxis={[
        {
          data: dataCustomers.labels,
          scaleType: "band",
          id: "x-axis-id",
        },
      ]}
      yAxis={[
        {
          id: "amount",
          scaleType: "linear",
        },
        // {
        //   id: 'pib',
        //   scaleType: 'log',
        // },
      ]}
    >
      <BarPlot />

      {showCashback && <LinePlot />}

      <ChartsTooltip />
      <ChartsXAxis label="Clientes" position="bottom" axisId="x-axis-id" />
      <ChartsYAxis label="" position="left" axisId="amount" />
    </ResponsiveChartContainer>
  ) : null;
}
