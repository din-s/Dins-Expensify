import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter text to filter"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />

        <p>
          Sort by:{" "}
          <select
            value={this.props.filters.sortBy}
            onChange={e => {
              if (e.target.value === "date") {
                this.props.dispatch(sortByDate());
              } else if (e.target.value === "amount") {
                this.props.dispatch(sortByAmount());
              }
            }}
          >
            <option value="date"> By Date </option>
            <option value="amount"> By Amount </option>
          </select>
        </p>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          displayFormat="DD/MM/YYYY"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
