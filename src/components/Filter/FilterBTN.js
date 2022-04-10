import React from "react";


const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {

  switch(input) {
    case 'Alive':
      var output = "Жив"
      break;
    case 'Dead':
      var output = "Мертв"
      break;
    case 'Unknown':
      var output = "Неизвестно"
      break;
    case 'Human':
      var output = "Человек"
      break;
    case 'Alien':
      var output = "Пришелец"
      break;
    case 'Humanoid':
      var output = "Гуманоид"
      break;
    case 'Poopybutthole':
      var output = "Мистер Жопосранчик"
      break;
    case 'Mythological':
      var output = "Мифическое существо"
      break;
    case 'Animal':
      var output = "Животное"
      break;
    case 'Disease':
      var output = "Болезнь"
      break;
    case 'Robot':
      var output = "Робот"
      break;
    case 'Cronenberg':
      var output = "Кроненберг"
      break;
    case 'Planet':
      var output = "Планета"
      break;
    case 'Female':
      var output = "Женщина"
      break;
    case 'Male':
      var output = "Мужчина"
      break;
    case 'Genderless':
      var output = "Без гендера"
      break;
    default:
    var output = "Загрузка..."  
  break; 
  }

  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {/* {input} */}
          {output}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;