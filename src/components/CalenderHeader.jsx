import CalenderHeaderstyle from "../styles/CalenderHeaderstyle";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openAddSidebar } from "../features/appointment/apointmentSlice";

const CalenderHeader = () => {
  const dispatch = useDispatch();
  return (
    <CalenderHeaderstyle>
      <div className="title">
        <FaCalendarAlt />
        <h1>Calendar</h1>
      </div>
      <div className="right">
        <button
          className="circle"
          onClick={() => {
            dispatch(openAddSidebar());
          }}
        >
          <FaPlus />
        </button>
      </div>
    </CalenderHeaderstyle>
  );
};

export default CalenderHeader;
