import Head from "next/head";
import {
  CardsSection,
  Chart,
  FilterButtons,
  PulseSwitch,
  TableData,
} from "@/components";
import { useCustomers, useToggle } from "@/hooks";
import { useEffect, useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [isPulseActive, togglePulse] = useToggle(false);

  const [range, setRange] = useState<string>("today");

  const handleSelection = (value: string): void => {
    setRange(value);

    router.push({ pathname: "/", query: { range: value } }, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    const rangeQuery = router.query.range as string;

    if (rangeQuery) {
      setRange(rangeQuery);
    }
  }, [router.query]);

  const { data, isSuccess, isLoading } = useCustomers(range);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Puntos Point Dashboard Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <Grid
          py={4}
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={8}>
            <FilterButtons range={range} handleSelection={handleSelection} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PulseSwitch isActive={isPulseActive} togglePulse={togglePulse} />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {isLoading && (
              <Skeleton variant="rectangular" width={"100%"} height={"550px"} />
            )}
            {isSuccess && (
              <Box width={"100%"} height={"550px"}>
                <Chart customers={data} showCashback={isPulseActive} />
              </Box>
            )}

            {isSuccess && <TableData customers={data.customers} />}
          </Grid>

          <Grid item xs={12} md={4}>
            <CardsSection />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
