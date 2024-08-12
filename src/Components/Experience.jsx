import { useState } from "react";
import * as data from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBriefcase, faBuilding, faCalendarDays, faCircleInfo, faLocation } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  const [experience, SetExperience] = useState(data.experience);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    SetExperience({
      ...experience,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  }
  function handleClick(event) {
    event.currentTarget.textContent === "Edit"
      ? setIsEditing(true)
      : setIsEditing(false);
  }

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className={"display " + (isEditing ? "hidden" : "")}>
        <p><FontAwesomeIcon icon={faBuilding}/><span>{experience["Company Name"]}</span></p>
        <p><FontAwesomeIcon icon={faBriefcase}/><span>{experience["Position Title"]}</span></p>
        <p><FontAwesomeIcon icon={faCalendarDays}/><span>{experience["Start Date"] + " - " + experience["End Date"]}</span></p>
        <p><FontAwesomeIcon icon={faLocation}/><span>{experience.Location}</span></p>
        <p><FontAwesomeIcon icon={faCircleInfo}/><span>{experience.Description}</span></p>
      </div>
      <div className={"edit-experience " + (isEditing ? "" : "hidden")}>
        <input
          type="text"
          value={experience["Company Name"] || ""}
          name="Company Name"
          id="Company Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={experience["Position Title"] || ""}
          name="Position Title"
          id="Position Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={experience["Start Date"] || ""}
          name="Start Date"
          id="Start Date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={experience["End Date"] || ""}
          name="End Date"
          id="End Date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={experience.Location || ""}
          name="Location"
          id="Location"
          onChange={handleChange}
        />
        <textarea
          type="text"
          value={experience.Description || ""}
          name="Description"
          id="Description"
          onChange={handleChange}
          cols={50}
          rows={4}
        />
      </div>
      <div className="btns">
        <button onClick={handleClick}>Edit</button>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}
