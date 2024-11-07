import { useState } from "react";
import { Grid2, Item } from "@mui/material";
import Menu from "../components/Menu/Menu";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import Content from "./Content.js";

const Home = () => {

  const [section, setSection] = useState("Overview");

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 0, lg: 2}} >
        <Menu section={section} setSection={setSection} />
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 10}}>
        <Grid2 size={12}>
          <HeaderBanner section={section}/>
        </Grid2>
        <Grid2 size={12} sx={{overflowY: 'scroll', height: '89vh'}}>
          {section === "Overview" ? (
            <Content />
          ):(
            <h1>{section}</h1>
          )}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Home;
