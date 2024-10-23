import { Grid2, Item } from "@mui/material";
import Menu from "../components/Menu/Menu";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import { Routes, Route } from 'react-router-dom'
import Overview from "./Overview";

const Home = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={2}>
        <Menu />
      </Grid2>
      <Grid2 size={10}>
        <Grid2 size={12}>
          <HeaderBanner />
        </Grid2>
        <Grid2 size={12}>
          <Overview />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Home;