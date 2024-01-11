// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { SalesLastMonth } from "@/interfaces";

const LATEST_REVENUE = [
  {
    id: "659cd23ae5eb3518fd7a7b51",
    month: "december",
    clients: 3276,
    balance: 1082,
    total: 3750712,
    cashback: {
      total: 230000,
      invoices: [
        { date: "01/11", value: 39400 },
        { date: "10/11", value: 39400 },
        { date: "20/11", value: 39400 },
      ],
    },
  },
  {
    id: "659cd23a605ab7a02fb13cc4",
    month: "november",
    clients: 4816,
    balance: 4001,
    total: 7222798,
    cashback: {
      total: 230000,
      invoices: [
        { date: "01/11", value: 39400 },
        { date: "10/11", value: 39400 },
        { date: "20/11", value: 39400 },
      ],
    },
  },
  {
    id: "659cd23abd8b00a6ba48540e",
    month: "october",
    clients: 3193,
    balance: 3249,
    total: 3722850,
    cashback: {
      total: 230000,
      invoices: [
        { date: "01/11", value: 39400 },
        { date: "10/11", value: 39400 },
        { date: "20/11", value: 39400 },
      ],
    },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SalesLastMonth>
) {
  res.status(200).json({ ok: true, revenueByMonth: LATEST_REVENUE });
}
