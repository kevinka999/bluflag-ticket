import { useEffect, useState } from "react";
import { Ticket } from "../types";
import api from "../api";
import { Button, Card, Input, PieGraphic, Table } from "../components";
import { ArrowDown, ArrowLeft, ArrowUp, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Overview = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

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

  if (loading && !tickets.length) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="text-primary h-24 w-24 animate-spin" />
      </div>
    );
  }

  const totalTickets = import.meta.env.VITE_NUMBERS_OF_TICKET;
  const soldPercentage = ((tickets.length / totalTickets) * 100).toFixed(1);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.seller?.toLowerCase().includes(searchTerm?.toLowerCase()),
  );

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    return sortDirection === "asc" ? a.number - b.number : b.number - a.number;
  });

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex w-full max-w-md flex-col gap-4">
        <div className="flex justify-end">
          <Link to="/">
            <Button variant="outline" size="medium">
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Button>
          </Link>
        </div>

        <Card.Root>
          <Card.Header>
            <Card.Title>Visão Geral de Vendas</Card.Title>
          </Card.Header>

          <Card.Content>
            <div className="mb-2 text-center">
              <span className="text-primary text-3xl font-bold">
                {soldPercentage}%
              </span>

              <p className="text-sm">
                {tickets.length} de {totalTickets} tickets vendidos
              </p>
            </div>

            <div className="h-[200px] w-full">
              <PieGraphic
                data={[
                  { name: "Vendidos", value: tickets.length },
                  { name: "Disponíveis", value: totalTickets - tickets.length },
                ]}
                tooltipFormatter={(value) => `${value} tickets`}
              />
            </div>
          </Card.Content>
        </Card.Root>

        <div className="flex flex-col gap-4">
          <Input
            placeholder="Pesquisar por nome do vendedor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>
                  <div className="flex items-center space-x-2">
                    <span>Ticket #</span>
                    <Button
                      variant="outline"
                      size="medium"
                      className="h-8 w-8 p-0"
                      onClick={() =>
                        setSortDirection(
                          sortDirection === "asc" ? "desc" : "asc",
                        )
                      }
                    >
                      {sortDirection === "asc" ? (
                        <ArrowUp className="h-4 w-4" />
                      ) : (
                        <ArrowDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </Table.Head>
                <Table.Head>Vendedor</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sortedTickets.length > 0 ? (
                sortedTickets.map((ticket, idx) => (
                  <Table.Row key={`${ticket.seller}-${ticket.number}-${idx}`}>
                    <Table.Cell className="font-medium">
                      {ticket.number}
                    </Table.Cell>
                    <Table.Cell>{ticket.seller}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={2} className="h-24 text-center">
                    Nenhum ticket encontrado
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  );
};
