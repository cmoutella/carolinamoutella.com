import React from "react";
import { string } from 'prop-types'

const Produto = ({title, description, cost1, cost2, id}) => (
    <div className="prod" id={id}>
        <h1 className="prod__title">{title}</h1>
        <p className="prod__description">{description}</p>
        <div className="prod__cost">
            <p className="price" id="old-price">{cost1}</p>
            <p className="price" id="new-price">{cost2}</p>
        </div>
    </div>
);

Produto.proptypes = {
    title: string.isRequired,
    description: string.isRequired,
    cost1: string.isRequired,
    cost2: string.isRequired,
    id: string.isRequired
}

export default Produto;