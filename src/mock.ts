export type MockSellerType = {
  id: number;
  name: string;
};

export type MockTicketType = {
  number: number;
  seller: string;
};

export const mockSellers: MockSellerType[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

export const mockTickets: MockTicketType[] = [
  { number: 100, seller: "John Doe" },
  { number: 101, seller: "Jane Smith" },
  { number: 102, seller: "Bob Johnson" },
  // Add more mock data as needed
];
