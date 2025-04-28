import {
  Cell,
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
  Legend,
} from "recharts";

type PieGraphicProps = {
  data: { name: string; value: number }[];
  tooltipFormatter?: (value: number) => string;
};

const COLORS = ["#1f65a2", "#E5E7EB"];

export const PieGraphic = ({ data, tooltipFormatter }: PieGraphicProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip formatter={tooltipFormatter} />
        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
};
