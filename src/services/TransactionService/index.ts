import { api } from "../api";

export interface Transaction {
  hashcod: number;
  title: string;
  amount: number;
  description: string;
  type: string;
  register_date: Date;
}

export interface GetTransactions {
  data: [Transaction];
}

export async function getTransactions(): Promise<GetTransactions> {
  return api
    .get("/transactions")
    .then(({ data }: GetTransactions) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}
