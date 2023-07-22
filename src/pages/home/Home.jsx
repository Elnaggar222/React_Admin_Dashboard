import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from '../../components/widgetSM/WidgetSm'
import WidgetLg from '../../components/widgetLG/WidgetLg'
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} dataKey="Active User" title="User Analytics" grid />
      <div className="homewidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
