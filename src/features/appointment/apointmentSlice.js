import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedules: [
    {
      title: "event 1",
      date: "2024-07-26",
    },
    {
      title: "event 2",
      date: "2024-07-27",
    },
    {
      title: "event 3",
      date: "2024-07-25",
    },
    {
      title: "event 4",
      date: "2024-07-23",
    },
    {
      title: "event 5",
      date: "2024-07-22",
    },
  ],
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: initialState,
});

export default appointmentSlice.reducer;
