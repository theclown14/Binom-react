import React from "react";
import CardList from "./CardList";

const Card = () => (
  <li className="links-cards__item card_new-home_list">
    <div className="links-cards__item-wrapper">
        <a href="#" className="links-cards-link">
            <h2 className="links-cards__item-title">Подборки новостроек</h2>
        </a>
        <CardList />
    </div>
    <img src="img/mom.svg" alt="" className="links__card__img" />
</li>
);

export default Card;