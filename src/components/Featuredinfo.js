import "./featuredInfo.css";

import { ArrowUpward } from '@mui/icons-material';

function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Clients</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2000.00</span>
          <span className="featuredMoneyRate">
            +300 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">New clients + old Clients</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Active Clients</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">800.00</span>
          <span className="featuredMoneyRate">
            +90 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Old Clients</span>
      </div>
    </div>
  );
}

export default Featuredinfo;