import { useState } from "react";
import * as data from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarDays, faCertificate, faLocation, faSchool } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  const [education, SetEducation] = useState(data.education);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    SetEducation({
      ...education,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  }
  function handleClick(event) {
    event.currentTarget.textContent === "Edit"
      ? setIsEditing(true)
      : setIsEditing(false);
  }

  return (
    <div className="education">
      <h2>Education</h2>
      <div className={"display " + (isEditing ? "hidden" : "")}>
        <p><FontAwesomeIcon icon={faSchool}/><span>{education["School"]}</span></p>
        <p><FontAwesomeIcon icon={faCertificate}/><span>{education.Degree}</span></p>
        <p><FontAwesomeIcon icon={faCalendarDays}/><span>{education["Start Date"] + " - " + education["End Date"]}</span></p>
        <p><FontAwesomeIcon icon={faLocation}/><span>{education.Location}</span></p>
      </div>
      <div className={"edit-education " + (isEditing ? "" : "hidden")}>
        <input
          type="text"
          value={education["School"] || ""}
          name="School"
          id="School"
          onChange={handleChange}
        />
        <input
          type="text"
          value={education.Degree || ""}
          name="Degree"
          id="Degree"
          onChange={handleChange}
        />
        <input
          type="text"
          value={education["Start Date"] || ""}
          name="Start Date"
          id="Start Date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={education["End Date"] || ""}
          name="End Date"
          id="End Date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={education.Location || ""}
          name="Location"
          id="Location"
          onChange={handleChange}
        />
      </div>
      <div className="btns">
        <button onClick={handleClick}>Edit</button>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}
