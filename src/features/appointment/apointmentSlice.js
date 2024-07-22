import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customPut, customPatch, customDelete, customFetch } from "../../utils";

export const getAppointments = createAsyncThunk(
  "appointments/getAppointments",
  async () => {
    const url = "/appointments";
    return customFetch(url);
  }
);
export const addAppointment = createAsyncThunk(
  "appointments/addAppointment",
  async (data) => {
    const { fullname, datetime, procedure, ismember } = data;
    let newAppointment = {
      title: fullname,
      start: datetime,
      end: "",
      extendedProps: {
        procedure: procedure,
        isMember: ismember == "on",
      },
      allDay: false,
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
  isPageLoading: false,
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
        state.schedules.push(action.payload);
      })
      .addCase(addAppointment.rejected, (state, action) => {
        state.addAppointmentLoader = false;
        alert("unable to add the appointment");
      })
      .addCase(AppointmentUpdated.pending, (state) => {})
      .addCase(AppointmentUpdated.fulfilled, (state, action) => {})
      .addCase(AppointmentUpdated.rejected, (state, action) => {
        alert("unable to update appointments");
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.isPageLoading = true;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.isPageLoading = false;
        const { id } = action.payload;
        state.schedules = state.schedules.filter((obj) => {
          return obj.id != id;
        });
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.isPageLoading = false;
        alert("unable to delete appointments");
      })
      .addCase(getAppointments.pending, (state) => {
        state.isPageLoading = true;
      })
      .addCase(getAppointments.fulfilled, (state, action) => {
        state.isPageLoading = false;
        state.schedules = action.payload;
      })
      .addCase(getAppointments.rejected, (state, action) => {
        state.isPageLoading = false;
        alert("unable to fetch appointments");
      });
  },
});

export const { openAddSidebar, closeAddSidebar } = appointmentSlice.actions;
export default appointmentSlice.reducer;
