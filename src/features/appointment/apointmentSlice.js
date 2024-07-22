import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customPut, customPatch, customDelete } from "../../utils";

export const addAppointment = createAsyncThunk(
  "appointments/addAppointment",
  async (data) => {
    const { fullname, datetime, procedure, ismember } = data;
    let newAppointment = {
      id: new Date().valueOf(),
      title: fullname,
      start: datetime,
      end: "",
      extendedProps: {
        procedure: procedure,
        isMember: ismember == "on",
      },
      allday: false,
    };
    return customPut("/addAppointment", newAppointment);
  }
);

export const AppointmentUpdated = createAsyncThunk(
  "appointments/AppointmentUpdated",
  async (data) => {
    return customPatch("/updateAppointment", data);
  }
);

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (data) => {
    return customDelete("/deleteAppointment", { id: data });
  }
);

const initialState = {
  schedules: [],
  addNewSidebarOpen: false,
  addAppointmentLoader: false,
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: initialState,
  reducers: {
    openAddSidebar: (state) => {
      state.addNewSidebarOpen = true;
    },
    closeAddSidebar: (state) => {
      state.addNewSidebarOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAppointment.pending, (state) => {
        state.addAppointmentLoader = true;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.addAppointmentLoader = false;
        state.addNewSidebarOpen = false;
      })
      .addCase(addAppointment.rejected, (state, action) => {
        state.addAppointmentLoader = false;
        alert("unable to add the appointment");
      })
      .addCase(AppointmentUpdated.pending, (state) => {})
      .addCase(AppointmentUpdated.fulfilled, (state, action) => {})
      .addCase(AppointmentUpdated.rejected, (state, action) => {})
      .addCase(deleteAppointment.pending, (state) => {})
      .addCase(deleteAppointment.fulfilled, (state, action) => {})
      .addCase(deleteAppointment.rejected, (state, action) => {});
  },
});

export const { openAddSidebar, closeAddSidebar } = appointmentSlice.actions;
export default appointmentSlice.reducer;
