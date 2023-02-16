// import axios from "axios";
import React, { useState, useEffect } from "react";
import data from "../data";
import { Model } from "./Model";
import "./sales.css";

function Sales() {
  // const [saveData, setSaveData] = useState([]);

  // useEffect(() => {
  //   const url =
  //     "http://api.reward-dragon.com:8001/rewardadmin/concern-manage-admin/";
  //   const body = {
  //     user_id: "1"
  //   };

  //   axios
  //     .post(url, body, {
  //       headers: {
  //         Authorization: "d401a31b50604523a1646aed428844c5"
  //       }
  //     })
  //     .then(function (res) {
  //       setSaveData(res.data.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   console.log(saveData);
  // }, []);
//   console.log(data);

  return (
    <section>
      {data.slice(0, 2).map((dt, key) => {
        return (
          <>
            <div
              key={key}
              className="cards"
              style={{ columns: "200px 2", columngap: "25px", padding: "25px" }}
            >
              <div className="card">
                {/* <button className="button-1" >open</button> */}
                <Model
                //   id={dt.concern_id}
                //   Type={dt.concern_type}
                //   email={dt.user_email_id}
                //   detail={dt.concern_details}
                //   org={dt.organization_id}
                //   name={dt.client_name}
                
                />
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default Sales;