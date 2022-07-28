import React from "react";

const BuildingCard = () => (
<li className="popular-cards__card">
            <a href="#" className="popular-cards__link">
              <div className="card-top">
                <img src="img/oasis.png" alt="" className="card-top__img" />
                <div className="card-top__wrapper">
                  <p className="card-top__date">4 кв. 2023</p>
                  <p className="card-top__lable">Эконом </p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom-address">
                  <h3 className="card-bottom-address__name">Оазис</h3>
                  <p className="card-bottom-address__area">Октябрьский р-н</p>
                  <div className="card-bottom-address__wrapper">
                    <img src="img/metro.svg" alt="" className="card-bottom-address__metro-img" />
                    <p className="card-bottom-address__metro">Октябрьская — 10 мин.</p>
                    <img src="img/walkman.svg" alt="" className="card-bottom-address__walk" />
                  </div>
                </div>
                <div className="card-bottom-info">
                  <p className="card-bottom-info__flat">Квартир: <span className="card-bottom-info__flat-num">324</span></p>
                  <p className="card-bottom-info__flat-select">С 1К 2К 3К</p>
                </div>
                <div className="card-bottom-price">
                  <p className="card-bottom-price__square">от 29,3 м2</p>
                  <p className="card-bottom-price__sum">от 2 500 000 ₽</p>
                </div>
                <p className="card-bottom__caption">АКД-Мета</p>
              </div>
            </a>
          </li>

    );

export default BuildingCard;