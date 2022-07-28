import React from "react";
import BuildingCard from './BuildingCard';

const Popular = () => (
    <section className="popular">
      <div className="popular__wrapper container">
        <div className="poplar-nav__wrapper">
          <h1 className="popular__title">
            Популярные ЖК в Новосибирске
          </h1>
          <div className="popular-arrows">
            <button className="popular-arrows__button">
              <img src="img/arrow.svg" alt="" className="popular-arrows__img arrow__left" />
            </button>
            <button className="popular-arrows__button">
              <img src="img/arrow.svg" alt="" className="popular-arrows__img" />
            </button>
          </div>
        </div>
        <ul className="popular-cards">
          <BuildingCard />
          <li className="popular-cards__card">
            <a href="#" className="popular-cards__link">
              <div className="card-top">
                <img src="img/civil.png" alt="" className="card-top__img" />
                <div className="card-top__wrapper">
                  <p className="card-top__date">4 кв. 2023</p>
                  <p className="card-top__lable">Элит </p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom-address">
                  <h3 className="card-bottom-address__name">Цивилизация</h3>
                  <p className="card-bottom-address__area">Калининский р-н</p>
                </div>
                <div className="card-bottom-info">
                  <p className="card-bottom-info__flat">Квартир: <span className="card-bottom-info__flat-num">102</span></p>
                  <p className="card-bottom-info__flat-select">С 1К 2К 3К</p>
                </div>
                <div className="card-bottom-price">
                  <p className="card-bottom-price__square">от 8,5 м2</p>
                  <p className="card-bottom-price__sum">от 2 447 000 ₽</p>
                </div>
                <p className="card-bottom__caption">СД Строй</p>
              </div>
            </a>
          </li>
          <li className="popular-cards__card">
            <a href="#" className="popular-cards__link">
              <div className="card-top">
                <img src="img/nikitina.png" alt="" className="card-top__img" />
                <div className="card-top__wrapper">
                  <p className="card-top__date">Сдан</p>
                  <p className="card-top__lable">Бизнес </p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom-address">
                  <h3 className="card-bottom-address__name">На Никитина</h3>
                  <p className="card-bottom-address__area">Октябрьский р-н</p>
                  <div className="card-bottom-address__wrapper">
                    <img src="img/metro.svg" alt="" className="card-bottom-address__metro-img" />
                    <p className="card-bottom-address__metro">Речной Вокзал — 14 мин.</p>
                    <img src="img/walkman.svg" alt="" className="card-bottom-address__walk" />
                  </div>
                </div>
                <div className="card-bottom-info">
                  <p className="card-bottom-info__flat">Квартир: <span className="card-bottom-info__flat-num">122</span></p>
                  <p className="card-bottom-info__flat-select">С 1К 2К 3К</p>
                </div>
                <div className="card-bottom-price">
                  <p className="card-bottom-price__square">от 31,5 м2</p>
                  <p className="card-bottom-price__sum">от 3 700 000 ₽</p>
                </div>
                <p className="card-bottom__caption">Брусника</p>
              </div>
            </a>
          </li>
          <li className="popular-cards__card">
            <a href="#" className="popular-cards__link">
              <div className="card-top">
                <img src="img/europe.png" alt="" className="card-top__img" />
                <div className="card-top__wrapper">
                  <p className="card-top__date">Есть сданные<br />
                    2 – 3 кв. 2022</p>
                  <p className="card-top__lable">Комфорт </p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom-address">
                  <h3 className="card-bottom-address__name">Европейский берег</h3>
                  <p className="card-bottom-address__area">Октябрьский р-н</p>
                  <div className="card-bottom-address__wrapper">
                    <img src="img/metro.svg" alt="" className="card-bottom-address__metro-img" />
                    <p className="card-bottom-address__metro">Речной Вокзал — 20 мин.</p>
                    <img src="img/walkman.svg" alt="" className="card-bottom-address__walk" />
                  </div>
                </div>
                <div className="card-bottom-info">
                  <p className="card-bottom-info__flat">Квартир: <span className="card-bottom-info__flat-num">240</span></p>
                  <p className="card-bottom-info__flat-select">С 1К 2К 3К</p>
                </div>
                <div className="card-bottom-price">
                  <p className="card-bottom-price__square">от 31,5 м2</p>
                  <p className="card-bottom-price__sum">от 2 700 000 ₽</p>
                </div>
                <p className="card-bottom__caption">Сибакадемстрой</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
);
export default Popular;