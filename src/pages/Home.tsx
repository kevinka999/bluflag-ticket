import { BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Card, Input } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  seller: Yup.string().required("Nome do vendedor é obrigatório"),
  tickets: Yup.string()
    .required("Números dos tickets são obrigatórios")
    .matches(
      /^[0-9]+(,[0-9]+)*$/,
      "Insira apenas números separados por vírgulas",
    ),
});

export const Home = () => {
  const formik = useFormik({
    initialValues: {
      seller: "",
      tickets: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <label className="text-sm font-medium" htmlFor="seller">
                      Nome do vendedor
                    </label>
                    <Input
                      id="seller"
                      name="seller"
                      placeholder="Insira o nome de quem vendeu o ticket"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.seller}
                    />
                    {formik.touched.seller && formik.errors.seller && (
                      <p className="mt-1 text-xs text-red-500">
                        {formik.errors.seller}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="tickets">
                      Ticket Numbers
                    </label>
                    <Input
                      id="tickets"
                      name="tickets"
                      placeholder="Insira os números dos tickets (e.g., 135 ou 135,136,137)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tickets}
                      className="bg-white"
                    />
                    {formik.touched.tickets && formik.errors.tickets && (
                      <p className="mt-1 text-xs text-red-500">
                        {formik.errors.tickets}
                      </p>
                    )}
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
