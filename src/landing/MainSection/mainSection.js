import React from 'react';
import './mainSection.scss'
import {SecondDog} from "../../svsIcons/secondDog";
import {CatIcon} from "../../svsIcons/catIcon";


export const MainSection = () => {



    return (
        <div className="main-section">
            <div className="main-section__background"></div>

            <div className="main-section__tittle">
                PetsCare — все для здоров’я <br/>
                та щастя ваших улюбленців
            </div>

            <div className="main-section__info--panel">
                <div className="main-section__info--panel__tittle">
                    Ветеринарний онлайн-хаб України. <br/>
                    Запуск у 2025 році!
                </div>
                <div className="main-section__info--panel__content">
                    Ми створюємо унікальний ресурс для власників собак, котів, птахів та гризунів.
                    Тут ви знайдете експертні статті, поради, а також зручні онлайн-сервіси для догляду за вашими
                    тваринами.
                    Слідкуйте за оновленнями!
                </div>
            </div>

            <div className="main-section__develop--tittle">
                План розвитку PetsCare у 2025 році
            </div>

            <div className="grid-container">
                <div className="grid-item">
                    <SecondDog/>
                </div>

                <div className="grid-item">
                    <div className="grid-item__tittle">Січень–Березень<br/> 2025:</div>
                    <div className="grid-item__description">Запуск медіа-розділу: новини, статті, поради ветеринарів.</div>
                </div>

                <div className="grid-item">
                    <div className="grid-item__tittle">Квітень–Червень<br/> 2025:</div>
                    <div className="grid-item__description">Додавання каталогу ветеринарних клінік та лікарів з пошуком відгуків.</div>
                </div>

                <div className="grid-item">
                    <div className="grid-item__tittle">Липень–Вересень <br/> 2025:</div>
                    <div className="grid-item__description">Онлайн-консультації з ветеринарами у відео- та чат-форматах.</div>
                </div>

                <div className="grid-item">
                    <div className="grid-item__tittle">Жовтень–Грудень<br/> 2025:</div>
                    <div className="grid-item__description">Запуск маркетплейсу зоотоварів: кормів, вітамінів, аксесуарів.</div>
                </div>

                <div className="grid-item">
                    <CatIcon/>
                </div>
            </div>


            <div className='gap'>hi</div>


        </div>
    )
}