import React from 'react'
import './bottomSection.scss'
import {FbIcon} from "../../svsIcons/fbIcon";
import {TwIcon} from "../../svsIcons/twIcon";
import {InIcon} from "../../svsIcons/inIcon";
import {YtIcon} from "../../svsIcons/ytIcon";


export const BottomSection = () => {


    return (

        <div className="bottom-section">

            <div className="bottom-section__project-info">

                <div className="bottom-section__project-info__tittle">Що ви знайдете на PetsCare?</div>

                <div className="bottom-section__project-info__block">
                    <div className="bottom-section__project-info__block__item">
                        <div className="bottom-section__project-info__block__item__tittle">Експертні статті та поради
                        </div>
                        <div className="bottom-section__project-info__block__item__description">Детальні матеріали про
                            догляд за котами, собаками, птахами та гризунами. Від основних рекомендацій із харчування та
                            вакцинації до специфіки лікування рідкісних захворювань.
                        </div>
                    </div>
                    <div className="bottom-section__project-info__block__item">
                        <div className="bottom-section__project-info__block__item__tittle">Каталог ветеринарних клінік і
                            лікарів
                        </div>
                        <div className="bottom-section__project-info__block__item__description">Зручний пошук фахівців
                            за містом, спеціалізацією та рейтингом. Можливість залишати відгуки та оцінки, щоб допомогти
                            іншим власникам тварин знайти найкращий варіант.
                        </div>
                    </div>
                    <div className="bottom-section__project-info__block__item">
                        <div className="bottom-section__project-info__block__item__tittle">Онлайн-консультації з
                            ветеринарами
                        </div>
                        <div className="bottom-section__project-info__block__item__description">Підтримка у форматі
                            відеоконференцій та чатів, щоб ви могли швидко отримати кваліфіковану пораду, не виходячи з
                            дому.
                        </div>
                    </div>
                </div>
                <div className="bottom-section__project-info__block">
                    <div className="bottom-section__project-info__block__item">
                        <div className="bottom-section__project-info__block__item__tittle">Новини та аналіз галузі</div>
                        <div className="bottom-section__project-info__block__item__description">Огляд останніх
                            ветеринарних трендів, нових методів лікування, актуальних клінік та зоотоварів.
                        </div>
                    </div>
                    <div className="bottom-section__project-info__block__item">
                        <div className="bottom-section__project-info__block__item__tittle">Маркетплейс зоотоварів</div>
                        <div className="bottom-section__project-info__block__item__description">Найкращі корми,
                            вітаміни, іграшки та засоби догляду в одному каталозі. Зручна доставка та перевірена якість.
                        </div>
                    </div>
                    <div className="bottom-section__project-info__block__item">
                        <div className="bottom-section__project-info__block__item__additional">
                            Слідкуйте за оновленнями та залишайте свій email, щоб отримати першими новини про запуск.
                            PetsCare стане вашим надійним партнером у догляді за домашніми улюбленцями!
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-section__contact-info">
                <div className="bottom-section__contact-info__email">
                    <div className="bottom-section__contact-info__email__tittle">Контакти:</div>
                    <div className="bottom-section__contact-info__email__value">info@petscare.ua</div>

                </div>
                <div className="bottom-section__contact-info__social-media">
                    <div className="bottom-section__contact-info__social-media__tittle">Соцмережі:</div>
                    <div className="bottom-section__contact-info__social-media__block">
                        <div className="bottom-section__contact-info__social-media__block__item"><FbIcon/></div>
                        <div className="bottom-section__contact-info__social-media__block__item"><TwIcon/></div>
                        <div className="bottom-section__contact-info__social-media__block__item"><InIcon/></div>
                        <div className="bottom-section__contact-info__social-media__block__item"><YtIcon/></div>
                    </div>
                </div>
            </div>

            <div className="bottom-section__legacy-info">
                PetsCare © 2024–2025. Усі права захищено. <span> Ми розвиваємо ветеринарний онлайн-хаб для власників тварин в Україні.</span>
            </div>

            <div className="bottom-section__opening-info">
                Запуск у 2025 році. <span> Долучайтеся!</span>
            </div>
        </div>
    )

}