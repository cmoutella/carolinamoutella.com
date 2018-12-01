import React from "react";
import { string, integer } from "prop-types";

const Item = ({title, description, discount, id}) => (
    <div className="item" id={id}>
        <div className="item__discount"><span>{discount}</span></div>
        <h4 className="item__title">{title}</h4>
        <p className="item__description">{description}</p>
    </div>
);

Item.proptypes = {
    title: string.isRequired,
    description: string,
    discount: string.isRequired,
    id: string.isRequired
}

export default Item;