import { useEffect, useState } from "react";
import { Ticket } from "../types";
import api from "../api";

export const Overview = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      api.ticket
        .get()
        .then((tickets) => {
          setTickets(tickets);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Overview</h1>

      {tickets.map((ticket) => (
        <span key={ticket.number}>{ticket.number}</span>
      ))}
    </div>
  );
};
