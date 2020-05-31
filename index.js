import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./src/routers/AppRouter";
import configureStore from "./src/store/configureStore";
import { startSetExpenses } from "./src/actions/expenses";
import { login, logout } from "./src/actions/auth";
import "./style.css";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./src/firebase/firebase";
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

render(<p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log("uid: ", user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    // console.log("logged in");
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
    // console.log("logged out");
  }
});
// Playing with localStorage
// import moment from 'moment';
// const getSavedExpenses = localStorage.getItem('expenses')
// const expenses=[{
//   title:'first',
//   amount:70,
//   createdAt:moment()
// },
// {
//   title:'Second',
//   amount:100,
//   createdAt:moment()
// }]

// console
// getSavedExpenses !== null ? JSON.parse(getSavedExpenses):localStorage.setItem('expenses',JSON.stringify(expenses))

// console.log(JSON.parse(getSavedExpenses))
