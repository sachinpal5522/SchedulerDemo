import AddAppointmentSidebarStyle from "../styles/AddAppointmentSidebarStyle";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaSpinner } from "react-icons/fa";
import {
  closeAddSidebar,
  addAppointment,
} from "../features/appointment/apointmentSlice";

const AddAppointmetSidebar = () => {
  const dispatch = useDispatch();
  const { addNewSidebarOpen, addAppointmentLoader } = useSelector(
    (state) => state.appointments
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newAppointment = Object.fromEntries(formData.entries());
    if (
      newAppointment.fullname &&
      newAppointment.datetime &&
      newAppointment.procedure
    ) {
      dispatch(addAppointment(newAppointment));
    } else {
      alert("Please Fill all the data");
    }
  };

  if (addNewSidebarOpen) {
    return (
      <>
        <AddAppointmentSidebarStyle>
          <div className="content">
            <button
              className="close-btn circle"
              onClick={() => {
                dispatch(closeAddSidebar());
              }}
            >
              <FaTimes />
            </button>
            <h1>Add Appointment</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" name="fullname" />
              <input type="text" placeholder="Purpose" name="procedure" />
              <input type="datetime-local" name="datetime" />
              <div>
                <input type="checkbox" name="ismember" />
                <label>Is Member</label>
              </div>
              <button type="submit" disabled={addAppointmentLoader}>
                {addAppointmentLoader ? (
                  <FaSpinner className="loading-icon" />
                ) : null}
                Add
              </button>
            </form>
          </div>
        </AddAppointmentSidebarStyle>
      </>
    );
  } else {
    return <></>;
  }
};

export default AddAppointmetSidebar;
