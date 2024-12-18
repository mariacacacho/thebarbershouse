import { Box, Typography, Grid2, Stack } from "@mui/material";
import DataTable from "../DataTable/DataTable";
import TreeView from "../TreeView/TreeView";
import ClientsChart from "../ClientsChart/ClientsChart";
import ProductsChart from "../ProductsChart/ProductsChart";
import StatCard from "../StatCard/StatCard";

const data = [
  {
    title: 'Clientes',
    value: '14k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Productos',
    value: '325',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'Citas',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },{
    title: 'Event count',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

const Overview = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid2
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid2>
        ))}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ClientsChart />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ProductsChart />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} columns={12}>
        <Grid2 size={{ xs: 12, lg: 9 }}>
          <DataTable />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <TreeView />
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Overview;
