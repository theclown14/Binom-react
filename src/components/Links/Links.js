import React from "react";
import Card from './Card';

const Links = () => (
<section className="links">
      <div className="links__wrapper container">
        <h1 className="links__title">
          Полезные ссылки
        </h1>
        <ul className="links-cards">
          <div className="links-cards__wrapper links-cards__wrapper_two">
            <Card />
            <li className="links-cards__item card_map">
              <div className="links-cards__item__wrapper">
                <a href="#" className="links-cards__link">
                  <h2 className="links-cards__item__title">Новостройки на карте</h2>
                </a>
                <p className="links-cards__text">
                  Ищите новостройки рядом с парком, детским садом или работой
                </p>
                <a href="#" className="links-cards__button">Искать на карте</a>
              </div>
              <img src="img/map.svg" alt="" className="cards__img" />
            </li>
          </div>
          <div className="links-cards__wrapper links-cards__wrapper_three">
            <li className="links-cards__item card_developers">
              <div className="links-cards__item__wrapper">
                <a href="#" className="links-cards__link">
                  <h2 className="links-cards__item__title">Реестр застройщиков</h2>
                </a>
                <p className="links-cards__text">
                  Выберите жилье среди объектов надежных застройщиков
                </p>
                <a href="#" className="links-cards__button">Смотреть реестр</a>
              </div>
              <img src="img/builder.svg" alt="" className="links-cards__img" />
            </li>
            <li className="links-cards__item card_under-construction_list">
              <div className="links-cards__item__wrapper">
                <a href="#" className="links-cards__link">
                  <h2 className="links-cards__item__title">Строящиеся ЖК</h2>
                </a>
                <ul className="cards-list">
                  <a href="#" className="cards-list__link">
                    <li className="cards-list__item">Сдача в этом году
                      <span className="cards-list__item-number">12</span>
                    </li>
                  </a>
                  <a href="#" className="cards-listitem__link">
                    <li className="cards-list__item">до 2022 года
                      <span className="cards-list__item-number">10</span>
                    </li>
                  </a>
                  <a href="#" className="cards-list__item__link">
                    <li className="cards-list__item">до 2023 года
                      <span className="cards-list__item_-number">17</span>
                    </li>
                  </a>
                  <a href="#" className="cards-list__item__link">
                    <li className="cards-list__item">до 2024 года
                      <span className="cards-list__item-number">5</span>
                    </li>
                  </a>
                </ul>
              </div>
              <img src="img/construction.svg" alt="" className="links-card__img" />
            </li>
            <li className="links-cards__item card_complited_list">
              <div className="links-cards__item__wrapper">
                <a href="#" className="links-cards__link">
                  <h2 className="links-cards__item__title">Сданные ЖК</h2>
                </a>
                <ul className="cards-list">
                  <a href="#" className="cards-list__link">
                    <li className="cards-list__item">Эконом
                      <span className="cards-list__item-number">22</span>
                    </li>
                  </a>
                  <a href="#" className="cards-listitem__link">
                    <li className="cards-list__item">Комфорт
                      <span className="cards-list__item-number">14</span>
                    </li>
                  </a>
                  <a href="#" className="cards-list__item__link">
                    <li className="cards-list__item">Бизнес
                      <span className="cards-list__item_-number">5</span>
                    </li>
                  </a>
                  <a href="#" className="cards-list__item__link">
                    <li className="cards-list__item">Элит
                      <span className="cards-list__item-number">9</span>
                    </li>
                  </a>
                </ul>
              </div>
              <img src="img/complited.svg" alt="" className="links-card__img" />
            </li>
          </div>
        </ul>
      </div>
    </section>
);
export default Links;