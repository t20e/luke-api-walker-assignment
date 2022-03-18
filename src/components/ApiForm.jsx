import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ApiForm = () => {
  let [typeInput, setTypeInput] = useState("planets");
  let [idInput, setIdInput] = useState("");
  const redirect = useHistory();

  const redirectUser = (e) => {
    e.preventDefault();
    console.log(typeInput);
    console.log(idInput);
    let copyId = idInput;
    setIdInput("");
    typeInput == 'planets' ?
    setTypeInput("planets"):
    setTypeInput('people')
    redirect.push(`/${typeInput}/${copyId}`)
    }

  return (
    <div>
      <form onSubmit={redirectUser}>
        
        <div style={{ display: "inline-block", marginTop: "100px" }}>
            <select onChange={ (e) => setTypeInput(e.target.value)}>
                <option  value='planets'>planets</option>
                <option value='people'>people</option>
            </select>   
    

        </div>
        
        <div style={{ display: "inline-block", marginTop: "100px" }}>
          <label>ID: </label>
          <input
            type="number"
            onChange={(e) => setIdInput(e.target.value)}
            value={idInput}
          />
        </div>
        
        <input type="submit" value="Search" />
        
      </form>
    </div>
  );
};

export default ApiForm;
