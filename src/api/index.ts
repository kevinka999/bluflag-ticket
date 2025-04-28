import { Ticket } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

type GetTicketResponse = {
  nome: string;
  valor: number;
};

const getTickets = async (): Promise<Ticket[]> => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(
        "Error in get ticket information, status: " + response.status,
      );
    }

    const data: GetTicketResponse[] = await response.json();
    return data.map((ticket) => ({
      seller: ticket.nome,
      number: ticket.valor,
    }));
  } catch (error) {
    console.error("Error in get ticket information:", error);
    return [];
  }
};

const postData = async (ticket: {
  seller: string;
  numbers: string;
}): Promise<boolean> => {
  try {
    const body = `name=${encodeURIComponent(ticket.seller)}&value=${encodeURIComponent(ticket.numbers)}`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error("Error in response, status: " + response.status);
    }

    return true;
  } catch (error) {
    console.error("Error in post ticket information:", error);
    return false;
  }
};

const api = {
  ticket: {
    get: getTickets,
    post: postData,
  },
};

export default api;
