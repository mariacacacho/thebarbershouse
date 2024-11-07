import {
  MenuLayout,
  AppTitle,
  boxTitleMenu,
  MenuSections,
  menuSection,
  menuSectionSelected,
  UserAvatar,
  UserInfo,
} from "./Styles.style";
import Logo2 from "../../assets/logo2.png";
import { Box, Grid2 } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Avatar from "@mui/material/Avatar";

const Menu = (props) => {
  return (
    <MenuLayout>
      <div>
      <Box sx={boxTitleMenu}>
        <Grid2 container>
          <Grid2 size={3}>
            <img src={Logo2} alt="Logo" />
          </Grid2>
          <Grid2 size={9} sx={{ display: "flex", justifyContent: "center" }}>
            <AppTitle>
              <p>The Barber's House</p>
              <p>Admin</p>
            </AppTitle>
          </Grid2>
        </Grid2>
      </Box>

      <MenuSections>
        <Box sx={menuSectionSelected} onClick={() => props.setSection('Overview')}>
          <HomeIcon fontSize="small" />
          <p>Overview</p>
        </Box>
        <Box sx={menuSection} onClick={() => props.setSection('Clientes')}>
          <PeopleIcon fontSize="small"/>
          <p>Clientes</p>
        </Box>
        <Box sx={menuSection} onClick={() => props.setSection('Productos')}>
          <ShoppingBagIcon fontSize="small"/>
          <p>Productos</p>
        </Box>
        <Box sx={menuSection} onClick={() => props.setSection('Citas')}>
          <AssignmentIcon fontSize="small" />
          <p>Citas</p>
        </Box>
      </MenuSections>
      </div>

      <UserAvatar>
        <Avatar alt="Bemy Sharp" src="/static/images/avatar/1.jpg" />
        <UserInfo>
          <p>John Doe</p>
          <p>admin@mail.com</p>
        </UserInfo>
      </UserAvatar>
    </MenuLayout>
  );
};

export default Menu;
