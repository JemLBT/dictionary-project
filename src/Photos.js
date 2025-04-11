import React from "react";
import "./Dictionary.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <span className="col-4" key={index}>
                <a href={photo.src.tiny} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt="imagereturned"
                  />
                </a>
              </span>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
