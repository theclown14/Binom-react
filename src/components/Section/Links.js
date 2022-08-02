import React from "react";
import Card from '../Card/Card';

const Links = () => (
  <section class="links">
  <div class="links__wrapper container">
      <h1 class="title links__title">
          Полезные ссылки
      </h1>
      <ul class="links-cards">
          <div class="links-cards__wrapper links-cards__wrapper--two">
            <Card />
            <li class="links-card">
                        <div class="links-card__wrapper">
                            <a href="#" class="links-card__link">
                                <h2 class="links-card__title">Новостройки на карте</h2>
                            </a>
                            <p class="links-card__text">
                                Ищите новостройки рядом с парком, детским садом или работой
                            </p>
                            <a href="#" class="links-card__button">Искать на карте</a>
                        </div>
                        <img src="img/map.svg" alt="" class="links-card__img" />
                    </li>
                </div>
                <div class="links-cards__wrapper links-cards__wrapper--three">
                    <li class="links-card">
                        <div class="links-card__wrapper">
                            <a href="#" class="links-card__link">
                                <h2 class="links-card__title">Реестр застройщиков</h2>
                            </a>
                            <p class="links-card__text">
                                Выберите жилье среди объектов надежных застройщиков
                            </p>
                            <a href="#" class="links-card__button">Смотреть реестр</a>
                        </div>
                        <img src="img/builder.svg" alt="" class="links-card__img" />
                    </li>
                    <li class="links-card">
                        <div class="links-card__wrapper">
                            <a href="#" class="links-card__link">
                                <h2 class="links-card__title">Строящиеся ЖК</h2>
                            </a>
                            <ul class="cards-list">
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">Сдача в этом году
                                        <span class="cards-list__item-number">12</span>
                                    </li>
                                </a>
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">до 2022 года
                                        <span class="cards-list__item-number">10</span>
                                    </li>
                                </a>
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">до 2023 года
                                        <span class="cards-list__item_-number">17</span>
                                    </li>
                                </a>
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">до 2024 года
                                        <span class="cards-list__item-number">5</span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <img src="img/construction.svg" alt="" class="links-card__img" />
                    </li>
                    <li class="links-card">
                        <div class="links-card__wrapper">
                            <a href="#" class="links-card__link">
                                <h2 class="links-card__title">Сданные ЖК</h2>
                            </a>
                            <ul class="cards-list">
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">Эконом
                                        <span class="cards-list__item-number">22</span>
                                    </li>
                                </a>
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">Комфорт
                                        <span class="cards-list__item-number">14</span>
                                    </li>
                                </a>
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">Бизнес
                                        <span class="cards-list__item_-number">5</span>
                                    </li>
                                </a>
                                <a href="#" class="cards-list__link">
                                    <li class="cards-list__item">Элит
                                        <span class="cards-list__item-number">9</span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <img src="img/complited.svg" alt="" class="links-card__img" />
                    </li>
                </div>
            </ul>
        </div>
    </section>
);
export default Links;