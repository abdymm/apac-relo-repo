import React from "react";
import user_ic from "../../../assets/img/user-ic.png";
import timeline_ic from "../../../assets/img/timeline-ic.png";
import doc_ic from "../../../assets/img/doc-ic.png";
const moment = require("moment");

function Card(props) {
  const { onClick, item } = props;
  const movingDate = new Date(item.moving_date);
  return (
    <div
      className="col-md-6 col-lg-4"
      {...props}
      onClick={() => {
        onClick(item);
      }}
    >
      <div className="card dashboard-card">
        <div className="card-block">
          <div className="row">
            <div className="col-md-2">
              <img src={user_ic} width={40} height={50} alt="profile" />
            </div>
            <div className="col-md-10">
              <h5 className="title mb-0">{item.name}</h5>
              <span className="label">Customer name</span>
            </div>
          </div>
          <div className="row mt-20">
            <div className="col-md-6">
              <b>{item.request_id}</b>
              <p className="label">Request ID</p>
            </div>
            <div className="col-md-6">
              <b>{moment(movingDate).format("MMMM d, YYYY")}</b>
              <p className="label">Moving Date</p>
            </div>
            <div className="col-md-6">
              <b>{item.shipment_mode}</b>
              <p className="label">Shipment Mode</p>
            </div>
            <div className="col-md-6">
              <b>{item.status}</b>
              <p className="label">Status</p>
            </div>
          </div>
          <div className="row relocate-container">
            <div className="col-md-2">
              <img src={timeline_ic} width={30} alt="profile" />
            </div>
            <div className="col-md-10">
              <p className="mb-0">{item.origin}</p>
              <p className="mb-0">{item.destination}</p>
            </div>
          </div>
          <div className="center">
            <p className="mt-10">
              <img src={doc_ic} width={25} alt="profile" />
              Document Required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
