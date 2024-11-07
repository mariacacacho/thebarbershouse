import { useState } from "react";
import { HeaderBannerLayout, MapRoute, DateNotifications} from "./Styles.style.js";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from '@mui/icons-material/Notifications';

const getDate = () => {
  const date = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const HeaderBanner = (props) => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <HeaderBannerLayout>
      <MapRoute>
        <p>Dashboard</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>{props.section}</p>
      </MapRoute>
      <DateNotifications>
        <div>
          <CalendarTodayIcon fontSize="small" />
          <p>{currentDate}</p>
        </div>
        <div>
          <NotificationsIcon fontSize="small" />
        </div>
      </DateNotifications>
    </HeaderBannerLayout>
  );
};

export default HeaderBanner;
