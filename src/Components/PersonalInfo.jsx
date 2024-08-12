import { useState } from 'react';
import * as data from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone,faLocation } from '@fortawesome/free-solid-svg-icons';

export default function PersonalInfo(){

    const[personalInfo,SetPersonalInfo] = useState(data.personalDetails);
    const[isEditing,setIsEditing] = useState(false)

    function handleChange(event){
        SetPersonalInfo({...personalInfo,[event.currentTarget.id]:event.currentTarget.value})
    }
    function handleClick(event){
        event.currentTarget.textContent === "Edit" ? setIsEditing(true) : setIsEditing(false);
    }

    return(
        <div className='personal-info'>
        <div className={'display ' + (isEditing ? "hidden" : "")} >
          <h1>{personalInfo['Full name']}</h1>
          <div>
            <p><FontAwesomeIcon icon={faEnvelope} /><span>{personalInfo.Email}</span></p>
            <p><FontAwesomeIcon icon={faPhone} /><span>{personalInfo['Phone number']}</span></p>
            <p><FontAwesomeIcon icon={faLocation} /><span>{personalInfo.Address}</span></p>
          </div>
        </div>
        <div className={'edit-personal-info ' + (isEditing ? "" : "hidden")}>
            <input type="text" value={personalInfo['Full name']||""} name='Full name' id="Full name" onChange={handleChange}/>
            <div>
                <input type="text" value={personalInfo['Email']||""} name='Email' id="Email" onChange={handleChange}/>
                <input type="text" value={personalInfo['Phone number']||""} name='Phone number' id="Phone number" onChange={handleChange}/>
                <input type="text" value={personalInfo['Address']||""} name='Address' id="Address" onChange={handleChange}/>
            </div>
        </div>
        <div className='btns'>
            <button onClick={handleClick}>Edit</button>
            <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    );
}