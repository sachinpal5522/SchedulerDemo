import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector, useDispatch } from "react-redux";
import FullCalenderStyle from "../styles/FullCalenderStyle";
import CalenderHeader from "../components/CalenderHeader";
import AddAppointmetSidebar from "../components/AddAppointmetSidebar";
import { useLoaderData } from "react-router-dom";
import {
  AppointmentUpdated,
  deleteAppointment,
} from "../features/appointment/apointmentSlice";
import EventContent from "../components/EventContent";
import { customFetch } from "../utils";

const url = "/appointments";
export const Loader = async () => {
  try {
    const data = await customFetch(url);
    return { appointments: data };
  } catch (ex) {
    alert("unable to getch data from server");
    return { appointments: [] };
  }
};

const Calender = () => {
  const { appointments } = useLoaderData();
  const dispatch = useDispatch();

  const appointmentChangeEvent = (changeInfo) => {
    const updatedEvent = changeInfo.event.toJSON();
    dispatch(AppointmentUpdated(updatedEvent));
  };

  const deleteEventHandler = (info) => {
    const e = info.jsEvent;
    if (e.target.parentElement.parentElement.classList.contains("delete")) {
      const { id } = info.event.toJSON();
      dispatch(deleteAppointment(id));
    }
  };

  const calenderConfig = {
    height: "100%",
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: "timeGridWeek",
    events: appointments,
    slotDuration: "00:20:00",
    slotLabelFormat: {
      hour: "numeric",
      minute: "2-digit",
      meridiem: false,
      hour12: false,
    },
    editable: true,
    nowIndicator: true,
    allDaySlot: false,
    headerToolbar: {
      start: "prev title next",
      center: "",
      end: "today",
    },
    eventColor: "var(--event-background-color)",
    eventTextColor: "var(--primary-font-color)",
    eventContent: EventContent,
    eventChange: appointmentChangeEvent,
    eventClick: deleteEventHandler,
  };

  return (
    <FullCalenderStyle>
      <CalenderHeader />
      <FullCalendar {...calenderConfig} />
      <AddAppointmetSidebar />
    </FullCalenderStyle>
  );
};
export default Calender;
