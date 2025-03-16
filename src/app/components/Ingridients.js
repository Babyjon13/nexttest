import React, { useState } from 'react';
import styles from './component.module.css'; // Импортируем стили
import Info from './Info';
import Image from 'next/image';

const IngredientsTable = ({ ingredients }) => {
  const [showAll, setShowAll] = useState(false);
  const [portions, setPortions] = useState(ingredients.portion); // Изначальное количество порций

  const ArrayOfIngredients = ingredients.ingredients;
  const visibleIngredients = showAll ? ArrayOfIngredients : ArrayOfIngredients.slice(0, 7);

  // Функция для увеличения количества порций
  const increasePortions = () => {
    setPortions(prevPortions => prevPortions + 1);
  };

  // Функция для уменьшения количества порций
  const decreasePortions = () => {
    if (portions > 1) {
      setPortions(prevPortions => prevPortions - 1);
    }
  };

  // Функция для форматирования числа (убирает .00, если они не нужны)
  const formatQuantity = (value) => {
    const quantity = value / ingredients.portion * portions;
    return quantity % 1 === 0 ? quantity.toString() : quantity.toFixed(2).replace(/\.?0+$/, '');
  };

  return (
    <div className={styles.lala}>
      <div className={styles.portion}>
      <button onClick={decreasePortions} className={styles.calc}>
        <svg width="36" height="36" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="19" stroke="#99CC33" strokeWidth="4"/>
          <line x1="13" y1="20" x2="29" y2="20" stroke="#003333" strokeWidth="4"/>
        </svg>
      </button>
      <p>{portions}</p>
      <button onClick={increasePortions} className={styles.calc}>
        <svg width="36" height="36" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="19" stroke="#99CC33" strokeWidth="4"/>
          <line x1="13" y1="20" x2="29" y2="20" stroke="#003333" strokeWidth="4"/>
          <line x1="21" y1="28" x2="21" y2="12" stroke="#003333" strokeWidth="4"/>
        </svg>
      </button>
      </div>
      {/* Таблица с ингредиентами */}
          <Info recipes={ingredients}/>
      <div className={styles.ArrayIngred}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ингредиент</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
          {visibleIngredients.map((ingredient, index) => (
            <tr key={index}>
              <td>{ingredient.name}</td>
              <td>{formatQuantity(ingredient.value)} {ingredient.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Кнопка для разворачивания списка */}
      {ArrayOfIngredients.length > 7 && (
        <button
        className={styles.button}
        onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Свернуть список' : 'Развернуть список'}
        </button>
      )}
      </div>
            <div className={styles.imageGallery}>
              {ingredients.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Изображение рецепта ${index + 1}`}
                  width={500}
                  height={400}
                  className={styles.image}
                />
              ))}
            </div>
    </div>
  );
};

export default IngredientsTable;