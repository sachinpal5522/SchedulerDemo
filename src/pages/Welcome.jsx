import WelcomeScreenStyle from "../styles/WelcomeScreenStyle";

const Welcome = () => {
  return (
    <WelcomeScreenStyle>
      <div className="content">
        <h1>Welcome to the demo</h1>
        <ol>
          <li>Calender menu on left will display weekly calender view</li>
          <li>
            Summary menu on left will disply you card of all the added
            appointments
          </li>
          <li>
            Using mongo db at backenf for storing and fetching appointmets
          </li>
          <li>
            All the basic requirements are met in the project as mentioned in
            the documentation
          </li>
          <li>
            Few enhancement can be done in this project like folder structure
            for redux slice can be better and distributed amound diffent files
            as well, ui can be fixed to make more eye catchy and many more....
          </li>
        </ol>
      </div>
    </WelcomeScreenStyle>
  );
};

export default Welcome;
