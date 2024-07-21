import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./features/appointment/apointmentSlice";
export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
  },
});
