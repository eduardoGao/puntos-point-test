import type { NextApiRequest, NextApiResponse } from "next";
import customers from "../../db/customers.json";
import type { Customers } from "@/interfaces";
import { getDateRange } from "@/utils";

const defaultCurrentDate = "2024-01-09";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customers>
) {
  const range = req.query.range as string;

  if (range === "all") {
    const customersData = getCustomersQuery(customers);

    res.status(200).json({
      ok: true,
      ...customersData,
    });
  } else {
    const rangeDate =
      range === "today"
        ? defaultCurrentDate
        : getDateRange(defaultCurrentDate, range);

    const filter = customers.filter(
      (item) => item.date >= rangeDate! && item.date <= defaultCurrentDate
    );

    const customersData = getCustomersQuery(filter);

    res.status(200).json({
      ok: true,
      ...customersData,
    });
  }
}

function getCustomersQuery(
  customers: {
    name: string;
    date: string;
    havePurchase: boolean;
    isNew: boolean;
  }[]
) {
  const total = customers.length;
  const newCustomers = customers.filter((item) => item.isNew).length;
  const havePurchase = customers.filter((item) => item.havePurchase).length;
  const notHavePurchase = customers.filter((item) => !item.havePurchase).length;

  return {
    total,
    newCustomers,
    havePurchase,
    notHavePurchase,
    customers,
  };
}
