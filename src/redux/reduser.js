import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";
import infantСontacts from "../components/contacts.json";

const items = createReducer([...infantСontacts], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((element) => element.id !== action.payload),
});

const filter = createReducer("", {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
