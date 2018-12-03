import React from "react";
import { string, func } from "prop-types";

const Item = ({title, description, discount, id, handleClick}) => (
    <button className="item" id={id} onClick={handleClick}>
        <div className="item__discount"><span>{discount}</span></div>
        <h4 className="item__title">{title}</h4>
        <p className="item__description">{description}</p>
    </button>
);

Item.proptypes = {
    title: string.isRequired,
    description: string,
    discount: string.isRequired,
    id: string.isRequired,
    handleClick: func.isRequired
}

export default Item;