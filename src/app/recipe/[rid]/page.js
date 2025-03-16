'use client';
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import IngredientsTable from "@/app/components/Ingridients";

export default function RecipePage() {
  const { rid } = useParams(); // Получаем rid из URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipe/${rid}`);
        if (!response.ok) {
          throw new Error('Рецепт не найден');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [rid]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{recipe.title}</h1>

      <div className={styles.details}>
        <h2>Ингредиенты</h2>
              <IngredientsTable  ingredients={recipe} />
            
      <p className={styles.description}>{recipe.description}</p>




        <h2>Шаги приготовления</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>
              <h3>{step.stepTitle}</h3>
              <p>{step.stepDescription}</p>
              {step.stepImage && (
                <Image
                  src={step.stepImage}
                  alt={`Шаг ${index + 1}`}
                  width={996}
                  height={522}
                  className={styles.stepImage}
                  objectFit="cover"
                  unoptimized
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}