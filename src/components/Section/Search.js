import React from "react";
import SearchForm from "../Form/SearchForm";

const Search = () => (

<section class="search">
<div class="search__wrapper container">
    <h1 class="search__title">Поиск по новостройкам</h1>
    <form action="" class="search-form">
        <div class="search__buttons">
            <button class="button search__button">Классический поиск</button>
            <button class="button search__button">Умная строка</button>
        </div>
        <div class="search-form__wrapper">
        <SearchForm />
            <div class="search-form__buttons">
                <button class="button search-form__button">
                    <img src="img/search-filter.svg" alt="" class="search-form__button-img" />
                </button>
                <button class="button search-form__button-find">Найти</button>
            </div>
        </div>
    </form>
</div>
</section>
);
export default Search;