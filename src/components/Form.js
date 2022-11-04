import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // function handleSubmit(event){
  //   event.preventDefault()
  //   const formData = {
  //     firstName: firstName,
  //     lastName: lastName,
  //   }
  //   props.sendFormDataSomewhere(formData)
  //   setFirstName("")
  //   setLastName("")
  // }


 // BECAUSE WE DONT HAVE A SERVER - DEMO THIS WAY (ABOVE IS FOR LIVE SERVER EX)
 // Controlled form inputs are good because we can use validation and better error handling 
 // that is good for live examples too

  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([])
    } else {
      setErrors(["First name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
        {/* This displays the submissions on the screen */}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
