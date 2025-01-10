import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardsComponent = () => {
    const [cards, setCards] = useState([]); // Состояние для карточек
    const [selectedCard, setSelectedCard] = useState(null); // Выбранная карточка
    const [isPopupVisible, setPopupVisible] = useState(false); // Состояние popup

    // Загрузка данных при загрузке страницы
    useEffect(() => {
        axios.get('https://api.example.com/cards') // Замените на свой API
            .then((response) => {
                setCards(response.data); // Сохранение карточек
            })
            .catch((err) => {
                console.error('Ошибка при загрузке данных:', err);
            });
    }, []);

    // Функция для открытия popup и передачи данных карточки
    const openPopup = (id) => {
        const card = cards.find((card) => card.id === id); // Находим карточку по ID
        setSelectedCard(card); // Устанавливаем выбранную карточку
        setPopupVisible(true); // Показываем popup
    };

    // Функция для закрытия popup
    const closePopup = () => {
        setPopupVisible(false); // Скрываем popup
        setSelectedCard(null); // Очищаем выбранную карточку
    };

    return (
        <div>
            <h1>Карточки</h1>
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <strong>{card.name}</strong>
                        <button onClick={() => openPopup(card.id)}>Показать детали</button>
                    </li>
                ))}
            </ul>

            {/* Popup окно */}
            {isPopupVisible && selectedCard && (
                <div style={popupStyle}>
                    <h2>{selectedCard.name}</h2>
                    <p>{selectedCard.description}</p>
                    <button onClick={closePopup}>Закрыть</button>
                </div>
            )}
        </div>
    );
};

// Пример стилей для popup
const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
};

export default CardsComponent;
