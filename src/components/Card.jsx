import { getBorderColor } from "../utils";

const getTime = (isoString) => {
  if (!isoString) {
    return "";
  }
  const now = new Date(isoString);
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const Card = ({ start, title, extendedProps, end }) => {
  const { procedure, isMember } = extendedProps;

  return (
    <div className={`card-item ${getBorderColor(procedure)}`}>
      <div className="header">
        <h1 className="title">{title}</h1>
        <div className="procedure">{procedure}</div>
      </div>
      <div className="footer">
        <span>
          <div>{`${new Date(start).toDateString()}`}</div>
          {`${getTime(start)}-${getTime(end)}`}
        </span>
        {true ? <div className="tag">Member</div> : ""}
      </div>
    </div>
  );
};

export default Card;
