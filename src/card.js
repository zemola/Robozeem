import React from "react";

const Card = ({id, name, email}) => {
  return(
    <div>
      <img alt="robot" src={`https://robohash.org/test ${id}`} />
        <h1>{name}</h1>
        <p>{email}</p>
    </div>
  )
}

export default Card;