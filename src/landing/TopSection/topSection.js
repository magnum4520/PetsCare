import React from 'react';
import './topSection.scss';
import {MainDog} from "../../svsIcons/mainDog";
import {MainLogo} from "../../svsIcons/mainLogo";


const TopSection = () => {
    return (
        <div className="top-section">
            <div className="top-section__background">
                <div className="top-section__background__circle--one"></div>
                <div className="top-section__background__circle--two"></div>
                <div className="top-section__background__circle--three">
                    <MainDog/>
                </div>
            </div>

            <div className="top-section__header">
                <div className="top-section__header__logo">
                    <MainLogo/>
                </div>
                <div className="top-section__header__list">
                    <div className="top-section__header__list__button">
                        Головна
                    </div>
                    <div className="top-section__header__list__button">
                        Про проект
                    </div>
                    <div className="top-section__header__list__button">
                        Контакти
                    </div>
                </div>
            </div>

            <div className="top-section__form">
                <div className="top-section__form__head">
                    <div className="top-section__form__head__tittle">Залиште свій email,</div>
                    <div className="top-section__form__head__info">щоб дізнатися про запуск</div>
                </div>
                <input type="text" className="top-section__form__input" placeholder="Email"/>
                <button className="top-section__form__button">Надіслати</button>
            </div>

        </div>
    );
};

export default TopSection;