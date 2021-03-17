import { combineReducers } from "@reduxjs/toolkit";
import tasksModule from "../views/Pages/Home/modules";

const rootReducer = combineReducers({
  tasks: tasksModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
