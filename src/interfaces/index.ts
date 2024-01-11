export type SalesMonth = {
  id: string;
  month: string;
  clients: number;
  balance: number;
  total: number;
  cashback: Cashback;
};

type Cashback = {
  total: number;
  invoices: {
    date: string;
    value: number;
  }[];
};

export type SalesLastMonth = {
  ok: boolean;
  revenueByMonth: SalesMonth[];
};

export type Customers = {
  ok: boolean;
  total: number;
  newCustomers: number;
  havePurchase: number;
  notHavePurchase: number;
  customers: {
    name: string;
    date: string;
    isNew: boolean;
    havePurchase: boolean;
  }[];
};

export type CustomersData = {
  name: string;
  date: string;
  isNew: boolean;
  havePurchase: boolean;
};
