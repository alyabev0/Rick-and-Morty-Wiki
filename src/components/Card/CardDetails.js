import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {

  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  switch(gender) {
    case 'Female':
      var genderOutput = "Женщина"
      break;
    case 'Male':
      var genderOutput = "Мужчина"
      break;
    case 'Genderless':
      var genderOutput = "Без гендера"
      break;
    case 'unknown':
      var genderOutput = "Неизвестно"
      break;
    default:
    var genderOutput = "Загрузка..."  
  break; 
  }
  switch(species) {
    case 'Human':
      var speciesOutput = "Человек"
      break;
    case 'Alien':
      var speciesOutput = "Пришелец"
      break;
    case 'Humanoid':
      var speciesOutput = "Гуманоид"
      break;
    case 'Poopybutthole':
      var speciesOutput = "Мистер Жопосранчик"
      break;
    case 'Mythological':
      var speciesOutput = "Мифическое существо"
      break;
    case 'Animal':
      var speciesOutput = "Животное"
      break;
    case 'Disease':
      var speciesOutput = "Болезнь"
      break;
    case 'Robot':
      var speciesOutput = "Робот"
      break;
    case 'Cronenberg':
      var speciesOutput = "Кроненберг"
      break;
    case 'Planet':
      var speciesOutput = "Планета"
      break;
    default:
    var speciesOutput = "Загрузка..."  
  break; 
  }

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">Мертв</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">Жив</div>;
          } else {
            return <div className="badge bg-secondary fs-5">Неизвестно</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Гендер : </span>
            {genderOutput}
          </div>
          <div className="">
            <span className="fw-bold">Локация: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Место рождения: </span>
            {/* {origin?.name} */}
            {origin?.name == "unknown" ? "Неизвестно" : origin?.name} 
          </div>
          <div className="">
            <span className="fw-bold">Раса: </span>
            {speciesOutput}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;