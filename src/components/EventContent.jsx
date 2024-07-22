import EventContentStyle from "../styles/EventContentStyle";
import { FaTrash } from "react-icons/fa";
import { getBorderColor } from "../utils";

const EventContent = (eventInfo) => {
  const { title, extendedProps, id } = eventInfo.event;
  const { procedure, isMember } = extendedProps;

  return (
    <>
      <EventContentStyle className={`${getBorderColor(procedure)}`}>
        <button className="delete circle">
          <FaTrash />
        </button>
        <div className="body">
          <div className="title">{title}</div>
          <div className="procedure">{procedure}</div>
        </div>
        <div className="footer">
          <span>{eventInfo.timeText}</span>
          {isMember ? <div className="tag">Member</div> : ""}
        </div>
      </EventContentStyle>
    </>
  );
};

export default EventContent;
