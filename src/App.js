import logo from './logo.svg';
import './App.css';
import './style.css';
import { Dropdown, Menu, Space, Typography, Button, version } from "antd";
import { DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['3']}
    items={[
      {
        key: '1',
        label: 'Эконом',
      },
      {
        key: '2',
        label: 'Бизнес',
      },
      {
        key: '3',
        label: 'Элит',
      },
    ]}
  />
);

const App = () => (
  
  <><><section className="search">
    <div className="container">
      <div className="search__content">
        <h1 className="search__title">Поиск по новостройкам</h1>
        <form action="" className="search__form">
          <div className="search__form__buttons__wrapper">
            <button className="search__form__button">Классический поиск</button>
            <button className="search__form__button">Умная строка</button>
          </div>
          <div className="search__form__wrapper">
            <div className="search__form__input__wrapper">
              <input type="text" className="search__form__input" placeholder="Район, мкрн, метро или ЖК" />
              <span className="search__form__separator">
              </span>
              <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
          Класс ЖК
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
              {/* <select name="" id="" className="search__form__select">
                <option value="" disabled selected className="search__form__option">
                  Класс ЖК
                </option>
                <option value=""></option>
              </select> */}
              <span className="search__form__separator">
              </span>
              <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
        Цена
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
              {/* <select name="" id="" className="search__form__select">
                <option value="" disabled selected className="search__form__option">
                  Цена
                </option>
              </select> */}
              <span className="search__form__separator">
              </span>
              <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
        Комнат
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
              {/* <select name="" id="" className="search__form__select">
                <option value="" disabled selected className="search__form__option">
                  Комнат
                </option>
              </select> */}
              <span className="search__form__separator">
              </span>
              <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
        Срок сдачи
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
              {/* <select name="" id="" className="search__form__select">
                <option value="" disabled selected className="search__form__option">
                  Срок сдачи
                </option>
              </select> */}
            </div>
            <div className="search__form__settings__wrapper">
              <button className="search__form__setting">
                <img src="img/search-filter.svg" alt="" className="search__form__setting__img" />
              </button>
              <button className="search__form__find__button">Найти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
    <section className="links">
      <div className="container">
        <div className="links__content">
          <h1 className="links__title">
            Полезные ссылки
          </h1>
          <ul className="links__cards">
            <div className="links__cards__wrapper">
              <li className="links__card card_new-home_list">
                <div className="links__card__wrapper">
                  <a href="#" className="links__card__link">
                    <h2 className="links__card__title">Подборки новостроек</h2>
                  </a>
                  <ul className="links__card__list">
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Рядом с парком
                        <span className="links__card__item__number">17</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Недалеко от метро
                        <span className="links__card__item__number">26</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Близко к центру
                        <span className="links__card__item__number">11</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Рядом с рекой
                        <span className="links__card__item__number">21</span>
                      </li>
                    </a>
                  </ul>
                </div>
                <img src="img/mom.svg" alt="" className="links__card__img" />
              </li>
              <li className="links__card card_map">
                <div className="links__card__wrapper">
                  <a href="#" className="links__card__link">
                    <h2 className="links__card__title">Новостройки на карте</h2>
                  </a>
                  <p className="links__card__text">
                    Ищите новостройки рядом с парком, детским садом или работой
                  </p>
                  <a href="#" className="links__card__button">Искать на карте</a>
                </div>
                <img src="img/map.svg" alt="" className="links__card__img" />
              </li>
            </div>
            <div className="links__cards__wrapper">
              <li className="links__card card_developers">
                <div className="links__card__wrapper">
                  <a href="#" className="links__card__link">
                    <h2 className="links__card__title">Реестр застройщиков</h2>
                  </a>
                  <p className="links__card__text">
                    Выберите жилье среди объектов надежных застройщиков
                  </p>
                  <a href="#" className="links__card__button">Смотреть реестр</a>
                </div>
                <img src="img/builder.svg" alt="" className="links__card__img" />
              </li>
              <li className="links__card card_under-construction_list">
                <div className="links__card__wrapper">
                  <a href="#" className="links__card__link">
                    <h2 className="links__card__title">Строящиеся ЖК</h2>
                  </a>
                  <ul className="links__card__list">
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Сдача в этом году
                        <span className="links__card__item__number">12</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">до 2022 года
                        <span className="links__card__item__number">10</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">до 2023 года
                        <span className="links__card__item__number">17</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">до 2024 года
                        <span className="links__card__item__number">5</span>
                      </li>
                    </a>
                  </ul>
                </div>
                <img src="img/construction.svg" alt="" className="links__card__img" />
              </li>
              <li className="links__card card_complited_list">
                <div className="links__card__wrapper">
                  <a href="#" className="links__card__link">
                    <h2 className="links__card__title">Сданные ЖК</h2>
                  </a>
                  <ul className="links__card__list">
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Эконом
                        <span className="links__card__item__number">22</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Комфорт
                        <span className="links__card__item__number">14</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Бизнес
                        <span className="links__card__item__number">5</span>
                      </li>
                    </a>
                    <a href="#" className="links__card__item__link">
                      <li className="links__card__item">Элит
                        <span className="links__card__item__number">9</span>
                      </li>
                    </a>
                  </ul>
                </div>
                <img src="img/complited.svg" alt="" className="links__card__img" />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section></><section className="popular">
      <div className="container">
        <div className="poplar__nav__wrapper">
          <h1 className="popular__title">
            Популярные ЖК в Новосибирске
          </h1>
          <div className="popular__arrows">
            <button className="popular__arrows__button">
              <img src="img/arrow.svg" alt="" className="popular__arrows__button__img arrow__left" />
              </button>
            <button className="popular__arrows__button">
              <img src="img/arrow.svg" alt="" className="popular__arrows__button__img" />
              </button>
          </div>
        </div>
        <ul className="popular__cards">

          <li className="popular__card">
            
              <div className="card__top">
                <img src="img/oasis.png" alt="" className="card__top__img" />
                  <div className="card__top__wrapper">
                    <p className="card__top__date">4 кв. 2023</p>
                    <p className="card__top__lable">Эконом </p>
                  </div>
                </div>
              <div className="card__bottom">
                <div className="card__bottom__address">
                  <h3 className="address__name">Оазис</h3>
                  <p className="address__area">Октябрьский р-н</p>
                  <div className="address__wrapper">
                    <img src="img/metro.svg" alt="" className="address__metro__img" />
                      <p className="address__metro">Октябрьская — 10 мин.</p>
                      <img src="img/walkman.svg" alt="" className="address__walk" />
                      </div>
                    </div>
                  <div className="card__bottom__info">
                    <p className="info__flat">Квартир: <span className="info__flat__num">324</span></p>
                    <p className="info__flat__select">С 1К 2К 3К</p>
                  </div>
                  <div className="card__bottom__price">
                    <p className="price__square">от 29,3 м2</p>
                    <p className="price__sum">от 2 500 000 ₽</p>
                  </div>
                  <p className="card__bottom__caption">АКД-Мета</p>
                </div>
              
          </li>

          <li className="popular__card">
            
              <div className="card__top">
                <img src="img/civil.png" alt="" className="card__top__img" />
                  <div className="card__top__wrapper">
                    <p className="card__top__date">4 кв. 2023</p>
                    <p className="card__top__lable">Элит</p>
                  </div>
                </div>
              <div className="card__bottom">
                <div className="card__bottom__address">
                  <h3 className="address__name">Цивилизация</h3>
                  <p className="address__area">Калининский р-н</p>
                </div>
                <div className="card__bottom__info">
                  <p className="info__flat">Квартир: <span className="info__flat__num">102</span></p>
                  <p className="info__flat__select">С 1К 2К 3К</p>
                </div>
                <div className="card__bottom__price">
                  <p className="price__square">от 28,5 м2</p>
                  <p className="price__sum">от 2 447 000 ₽</p>
                </div>
                <p className="card__bottom__caption">СД Строй</p>
              </div>
            
          </li>
          <li className="popular__card">
            
              <div className="card__top">
                <img src="img/nikitina.png" alt="" className="card__top__img" />
                  <div className="card__top__wrapper">
                    <p className="card__top__date">Сдан</p>
                    <p className="card__top__lable">Бизнес</p>
                  </div>
                </div>
              <div className="card__bottom">
                <div className="card__bottom__address">
                  <h3 className="address__name">На Никитина</h3>
                  <p className="address__area">Октябрьский р-н</p>
                  <div className="address__wrapper"> <img src="img/metro.svg" alt="" className="address__metro__img" />
                    <p className="address__metro">Речной Вокзал — 14 мин.</p>
                    <img src="img/walkman.svg" alt="" className="address__walk" />
                    </div>
                  </div>
                  <div className="card__bottom__info">
                    <p className="info__flat">Квартир: <span className="info__flat__num">122</span></p>
                    <p className="info__flat__select">С 1К 2К 3К</p>
                  </div>
                  <div className="card__bottom__price">
                    <p className="price__square">от 31,5 м2</p>
                    <p className="price__sum">от 3 700 000 ₽</p>
                  </div>
                  <p className="card__bottom__caption">Брусника</p>
                </div>
              
          </li>
          <li className="popular__card">
            
              <div className="card__top">
                <img src="img/europe.png" alt="" className="card__top__img" />
                  <div className="card__top__wrapper">
                    <p className="card__top__date">Есть сданные<br />
                      2 – 3 кв. 2022
                    </p>
                    <p className="card__top__lable">Комфорт</p>
                  </div>
                </div>
              <div className="card__bottom">
                <div className="card__bottom__address">
                  <h3 className="address__name">Европейский берег</h3>
                  <p className="address__area">Октябрьский р-н</p>
                  <div className="address__wrapper">
                    <img src="img/metro.svg" alt="" className="address__metro__img" />
                      <p className="address__metro">Речной Вокзал — 20 мин.</p>
                      <img src="img/walkman.svg" alt="" className="address__walk" />
                      </div>


                    </div>
                  <div className="card__bottom__info">
                    <p className="info__flat">Квартир: <span className="info__flat__num">240</span></p>
                    <p className="info__flat__select">С 1К 2К 3К</p>
                  </div>
                  <div className="card__bottom__price">
                    <p className="price__square">от 31,5 м2</p>
                    <p className="price__sum">от 2 700 000 ₽</p>
                  </div>
                  <p className="card__bottom__caption">Сибакадемстрой</p>
                </div>
              
          </li>
        </ul>
      </div>
    </section>
    <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
          Класс ЖК
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown></>



  );


export default App;
