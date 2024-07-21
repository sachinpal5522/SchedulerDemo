import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import FullCalenderStyle from "../styles/FullCalenderStyle";
import CalenderHeader from "../components/CalenderHeader";
import AddAppointmetSidebar from "../components/AddAppointmetSidebar";
import { useRef } from "react";

let calenderRef = null;
const Calender = () => {
  const { schedules } = useSelector((state) => state.appointments);
  calenderRef = useRef(null);
  const calenderConfig = {
    height: "100%",
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: "timeGridWeek",
    events: schedules,

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
  };

  return (
    <FullCalenderStyle>
      <CalenderHeader />
      <FullCalendar ref={calenderRef} {...calenderConfig} />
      <AddAppointmetSidebar />
    </FullCalenderStyle>
  );
};

export const fullCalenderRef = calenderRef;
export default Calender;
