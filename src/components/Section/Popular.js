import React from "react";
import BuildingCard from '../Card/BuildingCard';

const Popular = () => (
  <section class="popular">
  <div class="popular__wrapper container">
      <div class="popular-nav">
          <h1 class="title popular__title">
              Популярные ЖК в Новосибирске
          </h1>
          <div class="popular-arrows">
              <button class="popular-arrows__button">
                  <img src="img/arrow.svg" alt="" class="popular-arrows__img popular-arrows__img--left" />
              </button>
              <button class="popular-arrows__button">
                  <img src="img/arrow.svg" alt="" class="popular-arrows__img" />
              </button>
          </div>
      </div>
      <ul class="popular-cards">
          <BuildingCard />
          <li class="popular-card">
                    <a href="#" class="popular-card__link">
                        <div class="popular-card__top">
                            <img src="img/civil.png" alt="" class="popular-card__top-img" />
                            <div class="popular-card__top-wrapper">
                                <p class="popular-card__top-date">4 кв. 2023</p>
                                <p class="popular-card__top-lable">Элит </p>
                            </div>
                        </div>
                        <div class="popular-card__bottom">
                            <div class="popular-card__bottom-address">
                                <h3 class="popular-card__bottom-name">Цивилизация</h3>
                                <p class="popular-card__bottom-area">Калининский р-н</p>
                            </div>
                            <div class="popular-card__bottom-info">
                                <p class="popular-card__bottom-flat">Квартир: <span class="popular-card__bottom-num">102</span></p>
                                <p class="popular-card__bottom-select">С 1К 2К 3К</p>
                            </div>
                            <div class="popular-card__bottom-price">
                                <p class="popular-card__bottom-square">от 28,5 м2</p>
                                <p class="popular-card__bottom-sum">от 2 447 000 ₽</p>
                            </div>
                            <p class="popular-card__bottom-caption">СД Строй</p>
                        </div>
                    </a>
                </li>
               <li class="popular-card">
                    <a href="#" class="popular-card__link">
                        <div class="popular-card__top">
                            <img src="img/nikitina.png" alt="" class="popular-card__top-img" />
                            <div class="popular-card__top-wrapper">
                                <p class="popular-card__top-date">Сдан</p>
                                <p class="popular-card__top-lable">Бизнес </p>
                            </div>
                        </div>
                        <div class="popular-card__bottom">
                            <div class="popular-card__bottom-address">
                                <h3 class="popular-card__bottom-name">На Никитина</h3>
                                <p class="popular-card__bottom-area">Октябрьский р-н</p>
                                <div class="popular-card__bottom-wrapper">
                                    <img src="img/metro.svg" alt="" class="popular-card__bottom-img" />
                                    <p class="popular-card__bottom-metro">Речной Вокзал — 14 мин.</p>
                                    <img src="img/walkman.svg" alt="" class="popular-card__bottom-img" />
                                </div>
                            </div>
                            <div class="popular-card__bottom-info">
                                <p class="popular-card__bottom-flat">Квартир: <span class="popular-card__bottom-num">122</span></p>
                                <p class="popular-card__bottom-select">С 1К 2К 3К</p>
                            </div>
                            <div class="popular-card__bottom-price">
                                <p class="popular-card__bottom-square">от 31,5 м2</p>
                                <p class="popular-card__bottom-sum">от 3 700 000 ₽</p>
                            </div>
                            <p class="popular-card__bottom-caption">Брусника</p>
                        </div>
                    </a>
                </li>
               <li class="popular-card">
                    <a href="#" class="popular-card__link">
                        <div class="popular-card__top">
                            <img src="img/europe.png" alt="" class="popular-card__top-img" />
                            <div class="popular-card__top-wrapper">
                                <p class="popular-card__top-date">Есть сданные<br/>
                                    2 – 3 кв. 2022</p>
                                <p class="popular-card__top-lable">Комфорт </p>
                            </div>
                        </div>
                        <div class="popular-card__bottom">
                            <div class="popular-card__bottom-address">
                                <h3 class="popular-card__bottom-name">Европейский берег</h3>
                                <p class="popular-card__bottom-area">Октябрьский р-н</p>
                                <div class="popular-card__bottom-wrapper">
                                    <img src="img/metro.svg" alt="" class="popular-card__bottom-img" />
                                    <p class="popular-card__bottom-metro">Речной Вокзал — 20 мин.</p>
                                    <img src="img/walkman.svg" alt="" class="popular-card__bottom-img" />
                                </div>
                            </div>
                            <div class="popular-card__bottom-info">
                                <p class="popular-card__bottom-flat">Квартир: <span class="popular-card__bottom-num">240</span></p>
                                <p class="popular-card__bottom-select">С 1К 2К 3К</p>
                            </div>
                            <div class="popular-card__bottom-price">
                                <p class="popular-card__bottom-square">от 31,5 м2</p>
                                <p class="popular-card__bottom-sum">от 2 700 000 ₽</p>
                            </div>
                            <p class="popular-card__bottom-caption">Сибакадемстрой</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
);
export default Popular;