import React from "react";

const BuildingCard = () => (
<li class="popular-card">
                    <a href="#" class="popular-card__link">
                        <div class="popular-card__top">
                            <img src="img/oasis.png" alt="" class="popular-card__top-img" />
                            <div class="popular-card__top-wrapper">
                                <p class="popular-card__top-date">4 кв. 2023</p>
                                <p class="popular-card__top-lable">Эконом </p>
                            </div>
                        </div>
                        <div class="popular-card__bottom">
                            <div class="popular-card__bottom-address">
                                <h3 class="popular-card__bottom-name">Оазис</h3>
                                <p class="popular-card__bottom-area">Октябрьский р-н</p>
                                <div class="popular-card__bottom-wrapper">
                                    <img src="img/metro.svg" alt="" class="popular-card__bottom-img" />
                                    <p class="popular-card__bottom-metro">Октябрьская — 10 мин.</p>
                                    <img src="img/walkman.svg" alt="" class="popular-card__bottom-img" />
                                </div>
                            </div>
                            <div class="popular-card__bottom-info">
                                <p class="popular-card__bottom-flat">Квартир: <span class="popular-card__bottom-num">324</span></p>
                                <p class="popular-card__bottom-select">С 1К 2К 3К</p>
                            </div>
                            <div class="popular-card__bottom-price">
                                <p class="popular-card__bottom-square">от 29,3 м2</p>
                                <p class="popular-card__bottom-sum">от 2 500 000 ₽</p>
                            </div>
                            <p class="popular-card__bottom-caption">АКД-Мета</p>
                        </div>
                    </a>
                </li>
    );

export default BuildingCard;