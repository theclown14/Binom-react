import React from "react";

const CardList = () => (
    <ul className="cards-list">
    <a href="#" className="cards-list__link">
      <li className="cards-list__item">Рядом с парком
        <span className="cards-list__item-number">17</span>
      </li>
    </a>
    <a href="#" className="cards-list__link">
      <li className="cards-list__item">Недалеко от метро
        <span className="cards-list__item__number">26</span>
      </li>
    </a>
    <a href="#" className="cards-list__link">
      <li className="cards-list__item">Близко к центру
        <span className="cards-list__item__number">11</span>
      </li>
    </a>
    <a href="#" className="cards-list__link">
      <li className="cards-list__item">Рядом с рекой
        <span className="cards-list__item__number">21</span>
      </li>
    </a>
  </ul>
);

export default CardList;