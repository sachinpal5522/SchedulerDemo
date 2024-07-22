import SummeryViewStyle from "../styles/SummeryViewStyle";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAppointments } from "../features/appointment/apointmentSlice";
import Card from "../components/Card";

const Summery = () => {
  const dispatch = useDispatch();
  const { schedules } = useSelector((state) => {
    return state.appointments;
  });
  useEffect((state) => {
    dispatch(getAppointments());
  }, []);
  return (
    <SummeryViewStyle>
      <div className="header">
        <h1>Summary</h1>
      </div>
      <div className="listing">
        {schedules.map((data) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </SummeryViewStyle>
  );
};

export default Summery;
