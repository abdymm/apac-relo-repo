import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as LeadActionTypes from "../../store/actions/leads.actions";
import Card from "./components/Card";
import Detail from "./Detail";

function Leads() {
  const [selectedItem, setSelectedItem] = useState(null);
  const leadsState = useSelector((state) => state.leadsReducer);
  const { leads } = leadsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LeadActionTypes.getLeads());
  }, []);

  const onDetail = (lead) => {
    setSelectedItem(lead);
  };

  return (
    <div>
      <div className="container dashboard-container">
        <div className="row">
          {leads.map((lead) => {
            return (
              <Card
                item={lead}
                key={lead.id}
                onClick={(item) => {
                  onDetail(item);
                }}
              />
            );
          })}
        </div>
        {selectedItem && (
          <div className="row mt-20">
            <div className="col-md-12">
              <Detail item={selectedItem} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leads;
