import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Последняя локация:</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  Мертв
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  Жив
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  Неизвестно
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    return(
      <div style={{display: "flex", flexDirection: "column", width: "45%", marginLeft: "15%"}}>
    <h1 style={{textAlign: "center"}}>Not found</h1>
    <img style={{borderRadius: "40px"}}
     src="https://media2.giphy.com/media/1USKMDPjuH4ovL7J5h/giphy.gif?cid=ecf05e47x2iumd9bwxzu7kgwexly8osom3zxxrgd7k3upfg9&rid=giphy.gif&ct=g"
     alt="Not found!"
     />
     </div>
    )
  }

  return <>{display}</>;
};

export default Card;
