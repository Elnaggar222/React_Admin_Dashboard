import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="TopbarLeft">
          <span className="topbarLogo">Admin Panel</span>
        </div>
        <div className="TopbarRight">
          <div className="topIconContainer">
            <LanguageIcon />
          </div>
          <div className="topIconContainer">
            <SettingsIcon />
          </div>
          <div className="topIconContainer">
            <NotificationsNoneIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div>
            <img
              className="topbar-profile"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/w680/blank-profile-picture-hd-images-photo.JPG"
              alt="profile img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
