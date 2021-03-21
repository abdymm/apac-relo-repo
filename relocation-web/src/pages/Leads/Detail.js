import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSort);
library.add(faSortUp);
library.add(faSortDown);

const moment = require("moment");

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      page: 1,
      sizePerPageList: [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "All",
          value: this.props.length,
        },
      ],
      pageStartIndex: 1,
      paginationSize: 10,
      prePage: "Prev",
      nextPage: "Next",
      firstPage: "First",
      lastPage: "Last",
      paginationShowsTotal: this.renderShowsTotal,
      paginationPosition: "bottom",
      sortIndicator: true,
      noDataText: "No data",
    };
  }

  render() {
    const getCaret = (direction) => {
      if (direction === "asc") {
        return <FontAwesomeIcon icon="sort-up" />;
      }

      if (direction === "desc") {
        return <FontAwesomeIcon icon="sort-down" />;
      }

      return <FontAwesomeIcon icon="sort" />;
    };
    return (
      <div className="container">
        <BootstrapTable
          version="4"
          pagination
          data={this.props.item.appointments}
          options={this.options}
          striped
          hover
          condensed
        >
            <TableHeaderColumn dataField="id" isKey hidden>
            Id
          </TableHeaderColumn>
          
          <TableHeaderColumn
            dataField="appointment_date"
            dataSort={true}
            caretRender={getCaret}
            columnTitle
          >
            Appointment Date & Time
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField="request_status"
            dataSort={true}
            caretRender={getCaret}
            columnTitle
          >
            Request Status
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
