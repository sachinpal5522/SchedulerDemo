import { createSlice } from "@reduxjs/toolkit";
import fullCalenderRef from "../../pages/Calender";
const initialState = {
  schedules: [
    {
      id: 1,
      title: "event 1",
      start: "2024-07-26T14:30:00",
      end: "",
      extendedProps: {
        procedure: "Scaling",
      },
      allday: false,
    },
    {
      id: 2,
      title: "event 2",
      end: "",
      start: "2024-07-24T12:30:00",
      extendedProps: {
        procedure: "Root Canal",
      },
      allday: false,
    },
    {
      id: 3,
      title: "event 3",
      start: "2024-07-22T11:30:00",
      end: "",
      extendedProps: {
        procedure: "Construction",
      },
      allday: false,
    },
    {
      id: 4,
      title: "event 4",
      start: "2024-07-22T18:30:00",
      end: "",
      extendedProps: {
        procedure: "Wisdom Teeth Removal",
      },
      allday: false,
    },
    {
      id: 5,
      title: "event 5",
      start: "2024-07-20T20:30:00",
      end: "",
      extendedProps: {
        procedure: "Bleaching",
      },
      allday: false,
    },
  ],
  addNewSidebarOpen: false,
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: initialState,
  reducers: {
    addAppointment: (state, appointmentData) => {
      const { fullname, datetime, procedure } = appointmentData.payload;
      state.addNewSidebarOpen = false;
      let newAppointment = {
        id: new Date().valueOf(),
        title: fullname,
        start: datetime,
        end: "",
        extendedProps: {
          procedure: procedure,
        },
        allday: false,
      };
      state.schedules.push(newAppointment);
    },
    openAddSidebar: (state) => {
      state.addNewSidebarOpen = true;
    },
    closeAddSidebar: (state) => {
      state.addNewSidebarOpen = false;
    },
  },
});

export const { addAppointment, openAddSidebar, closeAddSidebar } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
