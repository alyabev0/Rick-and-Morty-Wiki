import React from "react";

const InputGroup = ({ name, changeID, total }) => {
  switch(name){
    case "Location":
      var output = "Локация"
      break;
    case 'Episode':
      var output = "Эпизод"
      break;
    default:
    var output = ""
  break;
  }
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Тык...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1}>
              {output} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;