'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import styles from './page.module.css';
import FiltersModal from './components/FiltersModal';
import Info from './components/Info';
import ImageSlider from './components/ImageSlider';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]); // Состояние для хранения всех категорий

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('/api/recipes/route.js');
      if (!response.ok) {
        throw new Error('Ошибка при загрузке рецептов');
      }
      const data = await response.json();
      setRecipes(data);

      // Сбор всех уникальных категорий
      const allCategories = data.flatMap((recipe) => recipe.categories);
      const uniqueCategories = [...new Set(allCategories)]; // Убираем дубликаты
      setCategories(uniqueCategories);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <>
      <div className={styles.container}>
        <Header />
        <ImageSlider 
          images={[
            "/lala/pngwing.com(4).png",
            "/uploads/1741887767307_salat-cezar-klassicheskii-s-kuricei_1611309202_16_max.jpg",
            "/icon/banner_gl.png",
            "/icon/power.jpg"
          ]}
        />
      </div>

      <div className={styles.gg}>
        <main className={styles.main}>
          <button className={styles.laman} onClick={openModal}>
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="2.5" x2="24" y2="2.5" stroke="white" />
              <line y1="10.5" x2="24" y2="10.5" stroke="white" />
              <line y1="18.5" x2="24" y2="18.5" stroke="white" />
              <rect x="5" width="1" height="5" fill="white" />
              <rect x="18" y="8" width="1" height="5" fill="white" />
              <rect x="11" y="16" width="1" height="5" fill="white" />
            </svg>
            <p>Фильтры</p>
          </button>

          <FiltersModal isOpen={isModalOpen} onClose={closeModal} categories={categories} />

          <div className={styles.gugu}>
  {recipes.map((recipe, index) => (
    <div key={index} className={styles.lenta}>
      <div className={styles.box}>
        <Image
          className={styles.Image}
          src={recipe.images[0]}
          height={150}
          width={150}
          style={{
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }}
          alt={recipe.title}
          unoptimized
        />
      </div>
      <div className={styles.cards}>
        <Info recipes={recipe} />
        <Link href={`/recipe/${recipe.rid}`}>
          <strong className={styles.title}>{recipe.title}</strong>
          <p>{recipe.description}</p>
        </Link>
      </div>
      <div className={styles.tags}>
        <button>{recipe.kkal}</button>
      </div>
    </div>
  ))}
</div>
       </main>
      </div>
      <Header />
    </>
  );
}