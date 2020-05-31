import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, title, amount, createdAt }) => (
  <div>
    <h3>{title}</h3>
    <p>
      {" "}
      Amount :INR {numeral(amount).format("0,0.00")} , createdAt :
      {moment(createdAt).format("Do MMM, YYYY")}
    </p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;
