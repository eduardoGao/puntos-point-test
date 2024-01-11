import type { Customers, SalesLastMonth } from "@/interfaces";

export async function getCustomers({
  range,
}: {
  range: string;
}): Promise<Customers> {
  const res = await fetch(`api/customers?range=${range}`);
  const data = res.json();
  return data;
}

export async function getMonthlyRevelue(): Promise<SalesLastMonth> {
  const res = await fetch("api/revenue-months");
  const data = res.json();
  return data;
}
