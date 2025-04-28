export interface Seller {
  id: string;
  name: string;
}

export interface Ticket {
  id: string;
  number: number;
  sellerId: string;
  sellerName: string;
}

export interface SalesData {
  name: string;
  value: number;
}
