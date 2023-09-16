import React from "react";

export default function Movie_card(props) {
  console.log(props);
  let { text } = props.movi;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.movi.imgSrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.movi.title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Buy Tickets
        </a>
      </div>
    </div>
  );
}