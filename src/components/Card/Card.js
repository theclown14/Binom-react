import React from "react";
import CardList from "./CardList";

const Card = () => (
    <li class="links-card ">
    <div class="links-card__wrapper">
        <a href="#" class="links-card__link">
            <h2 class="links-card__title">Подборки новостроек</h2>
        </a>
        <CardList />
        </div>
        <img src="img/mom.svg" alt="" class="links-card__img" />
    </li>
);

export default Card;