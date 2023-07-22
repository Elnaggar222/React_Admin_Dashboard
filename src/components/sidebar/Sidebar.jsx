import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  EmailOutlined,
  DynamicFeedOutlined,
  ChatBubbleOutlineOutlined,
  WorkOutlineOutlined,
  ReportGmailerrorredOutlined,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="Link">
              <li className="sidebarItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" />
              Analysis
            </li>
            <li className="sidebarItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="Link">
              <li className="sidebarItem">
                <PersonOutline className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="Link">
              <li className="sidebarItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <EmailOutlined className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarItem">
              <DynamicFeedOutlined className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <WorkOutlineOutlined className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" />
              Analysis
            </li>
            <li className="sidebarItem">
              <ReportGmailerrorredOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
