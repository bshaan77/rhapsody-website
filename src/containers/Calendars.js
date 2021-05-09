import Calendar from "@ericz1803/react-google-calendar";
import "./Calendars.css";

const API_KEY = process.env.REACT_APP_GOOGLE_DEV_KEY;
let calendars = [{ calendarId: process.env.REACT_APP_CALENDAR_ID_1, color: "#B241D1" }];

function Calendars() {
  return (<div><Calendar apiKey={API_KEY} calendars={calendars} /></div>);
}

export default Calendars;
