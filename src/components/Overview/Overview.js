import { OverviewLayout, OverviewBox, BoxContainer, SectionTitle } from "./Overview.style";
import DataTable from '../DataTable/DataTable'

const Overview = () => {
  return (
    <OverviewLayout>
      <BoxContainer>
        <OverviewBox width={"20%"}>
          <p>Clientes</p>
          <p>14k</p>
          <p>Last 30 days</p>
        </OverviewBox>
        <OverviewBox width={"20%"}>
          <p>Productos</p>
          <p>14k</p>
          <p>Last 30 days</p>
        </OverviewBox>
        <OverviewBox width={"20%"}>
          <p>Clientes</p>
          <p>14k</p>
          <p>Last 30 days</p>
        </OverviewBox>
        <OverviewBox width={"20%"}>
          <p>Clientes</p>
          <p>14k</p>
          <p>Last 30 days</p>
        </OverviewBox>
      </BoxContainer>
      <BoxContainer>
        <OverviewBox width={"45%"}></OverviewBox>
        <OverviewBox width={"45%"}></OverviewBox>
      </BoxContainer>
      <SectionTitle>Details</SectionTitle>
      <DataTable />
    </OverviewLayout>
  );
};

export default Overview;
