import moment from "moment";

export default [
  {
    id: "1",
    title: "Light Bill",
    amount: 120,
    createdAt: moment(0),
    note: ""
  },
  {
    id: "2",
    title: "Water Bill",
    amount: 700,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf(),
    note: ""
  },
  {
    id: "3",
    title: "Gas Bill",
    amount: 450,
    createdAt: moment(0)
      .add(14, "days")
      .valueOf(),
    note: ""
  }
];
