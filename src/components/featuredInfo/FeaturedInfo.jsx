import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import "./FeaturedInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featuredContainer">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4.5</span>
          <span className="featuredRate">
            -11.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$7.765</span>
          <span className="featuredRate">
            -51.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$99</span>
          <span className="featuredRate">
            +6.5 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
