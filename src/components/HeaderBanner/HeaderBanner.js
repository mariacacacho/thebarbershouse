import { HeaderBannerLayout, MapRoute, DateNotifications} from "./Styles.style.js";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from '@mui/icons-material/Notifications';

const HeaderBanner = () => {
  return (
    <HeaderBannerLayout>
      <MapRoute>
        <p>Dashboard</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Overview</p>
      </MapRoute>
      <DateNotifications>
        <div>
          <CalendarTodayIcon fontSize="small" />
          <p>Apr 17, 2024</p>
        </div>
        <div>
          <NotificationsIcon fontSize="small" />
        </div>
      </DateNotifications>
    </HeaderBannerLayout>
  );
};

export default HeaderBanner;
