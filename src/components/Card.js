import React from "react"
import "./Card.css"

const Card = props => (
  <div className="Card">
    <img src={props.image} alt="Card画像" />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default Card
