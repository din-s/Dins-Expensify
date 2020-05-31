import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
// import AutoDirectionProvider from 'react-with-direction/dist/AutoDirectionProvider';
import "react-dates/initialize";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        title: props.expense ? props.expense.title : "",
        note: props.expense ? props.expense.note : "",
        amount: props.expense ? props.expense.amount.toString() : "",
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calenderFocused: null,
        error: ""
      });
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;

    // going for a validation on string to match only number input that too only desired one
    // for detailed expression head on to regex101.com

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(focused => ({ calenderFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.amount) {
      const error = "do not leave Title or amount blank";
      this.setState(() => ({ error }));
    } else {
      const error = "";
      this.setState(() => ({ error }));
      this.props.onSubmit({
        title: this.state.title,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form>
          Title:
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          Amount:
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          Date:
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
            numberOfMonths={1}
            displayFormat="DD/MM/YYYY"
            // noBorder={true}
            // showDefaultInputIcon={true}
            hideKeyboardShortcutsPanel={true}

            // id={this.state.createdAt}
          />
          Note:
          <textarea
            placeholder="add some note to your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button onClick={this.onSubmit}>Add Expense</button>
        </form>
      </div>
    );
  }
}
