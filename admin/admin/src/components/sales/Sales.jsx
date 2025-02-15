import { useEffect, useState } from "react";
import "./sales.css";
import { userRequest } from "../../requestMethods";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Sales() {
  const [income,setIncome]=useState([]);
  const [perc,setPerc]=useState(0);
  useEffect(()=>{
    const getIncome = async ()=>{
      try{
        const res =await userRequest.get("orders");
        setIncome(res.data);
        // setPerc(res.data[1]);
        console.log(res.data);

      }catch{
        console.log("Error");
      }
    }
    getIncome();
  },[])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales in the last years</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">BDT 20,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales in the last month</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">BDT 4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales in the last day</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">BDT 2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
