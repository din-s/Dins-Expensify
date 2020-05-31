import myDatabase from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;
    const { title = "", note = "", amount = 0, createdAt = 0 } = expenseData;

    const expense = { title, note, amount, createdAt };

    myDatabase
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = expenseId => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;
    myDatabase
      .ref(`users/${uid}/expenses/${expenseId}`)
      .remove()
      .then(() => {
        console.log("Item removed successfully");
        dispatch(removeExpense(expenseId));
      })
      .catch(err => {
        console.log("Removed operation failed", err);
      });
  };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (expenseId, updates) => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;

    myDatabase
      .ref(`users/${uid}/expenses/${expenseId}`)
      .update(updates)
      .then(() => {
        console.log("update success!!");
        dispatch(editExpense(expenseId, updates));
      })
      .catch(err => console.log("err while updating", err));
  };
};

//SET_EXPENSES

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;

    return myDatabase
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(dataSnapShot => {
        const expenses = [];
        dataSnapShot.forEach(ChildSnapShot => {
          const expense = {
            id: ChildSnapShot.key,
            ...ChildSnapShot.val()
          };
          expenses.push(expense);
        });
        dispatch(setExpenses(expenses));
      });
  };
};
