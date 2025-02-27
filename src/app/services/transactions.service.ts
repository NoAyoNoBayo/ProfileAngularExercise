import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  transactions = [
    {
      id: "3016",
      referenceNumber: "ab483ee8-2567-438b-8a88-4e0bcdaf5f52",
      date: "2023-09-18T05:28:18.703377Z",
      title: "00000000001789963",
      subtitle: "InternalTransfer",
      balance: null,
      amount: 50,
      currencyCode: "EUR",
      isDebit: false,
      transactionType: null,
      status: null,
      currency: null,
    },
    {
      id: "3012",
      referenceNumber: "a2d0a1c9-417d-49d6-a20e-c118eeb58a88",
      date: "2023-09-15T16:48:50.947792Z",
      title: "00000000001789963",
      subtitle: "InternalTransfer",
      balance: null,
      amount: 50,
      currencyCode: "GBP",
      isDebit: false,
      transactionType: null,
      status: null,
      currency: null,
    },
    {
      id: "3007",
      referenceNumber: "d9d81bb5-6ebf-4517-8925-67dc82d2971e",
      date: "2023-09-15T12:49:45.508386Z",
      title: "504264910514825",
      subtitle: "InternalTransfer",
      balance: null,
      amount: -50,
      currencyCode: "EUR",
      isDebit: false,
      transactionType: null,
      status: null,
      currency: null,
    },
  ];

  constructor() { }

  getTransactions() {
    return this.transactions;
  }
}
