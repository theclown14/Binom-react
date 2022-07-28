import React from "react";
import SearchForm from "./SearchForm";

const Search = () => (
    <section className="section search">
        <div className="search__wrapper container">
            <h1 className="search__title">Поиск по новостройкам</h1>
            <form action="" className="search-form">
                <div className="search-form__buttons__wrapper">
                    <button className="button search-form__button">Классический поиск</button>
                    <button className="button search-form__button">Умная строка</button>
                </div>
                <div className="search-form__wrapper">
                    <SearchForm />
                    <div className="search-form__settings__wrapper">
                        <button className="button search-form__setting">
                            <img src="img/search-filter.svg" alt="" className="search-form__setting__img" />
                        </button>
                        <button className="button search-form__find__button">Найти</button>
                    </div>
                </div>
            </form>
        </div>
    </section>  
);
export default Search;