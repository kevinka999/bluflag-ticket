import { BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Card, Input } from "../components";
import React from "react";

export const Home = () => {
  const [ticketInput, setTicketInput] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ticketInput);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex w-full max-w-md flex-col gap-4">
        <img
          src="/bluflag_logo.png"
          alt="Logo"
          className="h-1/2 w-1/2 self-center rounded-full"
        />

        <div className="flex justify-end">
          <Link to="/overview">
            <Button variant="outline" size="medium">
              <BarChart className="h-4 w-4" />
              <span>Visualizar tickets vendidos</span>
            </Button>
          </Link>
        </div>

        <Card.Root>
          <Card.Header>
            <Card.Title>Registro de tickets</Card.Title>
          </Card.Header>
          <Card.Content>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <label className="text-sm font-medium" htmlFor="seller">
                      Nome do vendedor
                    </label>
                    <Input
                      id="seller"
                      placeholder="Insira o nome de quem vendeu o ticket"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="tickets">
                      Ticket Numbers
                    </label>
                    <Input
                      id="tickets"
                      placeholder="Insira os números dos tickets (e.g., 135 ou 135,136,137)"
                      value={ticketInput}
                      onChange={(e) => setTicketInput(e.target.value)}
                      className="bg-white"
                    />
                    <p className="text-muted-foreground text-xs">
                      Insira um número de ticket ou vários números separados por
                      vírgulas.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="medium"
                  variant="primary"
                  className="mt-6 w-full"
                >
                  Registrar tickets
                </Button>
              </div>
            </form>
          </Card.Content>
        </Card.Root>
      </div>
    </div>
  );
};
