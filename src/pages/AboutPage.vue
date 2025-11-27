<template>
    <div class="about">
  
      <!-- Заголовок -->
      <h1 class="anim">Наша история</h1>
  
      <!-- Большая фотография -->
      <img
        src="./main-photo.jpg"
        alt="Aksenova"
        class="main-photo anim"
      />
  
      <!-- Основной текст -->
      <p class="text anim">
        Этот раздел знакомит с Аленой Аксеновой и ее брендом Ceramic Aksenova.
        Это краткая история ее пути и того, что представляет собой ее бренд,
        сопровождаемая большой портретной фотографией для создания личной связи
        с посетителем.
      </p>
  
      <!-- Философия -->
      <h2 class="anim">Философия</h2>
      <p class="text anim">
        Философия ручной работы, уникальность каждого изделия и любовь к натуральным
        материалам. Каждое изделие — это не просто предмет, а история, рассказанная
        руками мастера.
      </p>
  
      <!-- Сетка изображений -->
      <div class="grid anim">
        <img src="./proc1.png">
        <img src="./proc2.png">
        <img src="./proc3.png">
        <img src="./proc4.png">
      </div>
  
      <!-- Источник вдохновения -->
      <h2 class="anim">Источник вдохновения</h2>
      <p class="text anim">
        Природа, путешествия и искусство — вот что вдохновляет меня на создание каждой новой коллекции.
        Шум моря, фактура камня, игра света и тени — все это находит отражение в моих работах.
      </p>
  
      <!-- Цитата -->
      <div class="quote anim">
        "Каждое изделие, созданное моими руками, несет в себе частичку души и тепла."
      </div>
  
    </div>
  </template>
  
  <script setup>
import { onMounted } from "vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".anim").forEach(el => observer.observe(el));
});
</script>

<style scoped>

/* ===========================
      ОСНОВА + МОБИЛЬНАЯ
   =========================== */

.about {
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Georgia", serif;
  color: #3a3a3a;
}

h1 {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin: 26px 0 10px;
}

.text {
  font-size: 16px;
  line-height: 1.55;
  margin-bottom: 20px;
}

.main-photo {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
}

.grid {
  width: 100%;
  margin: 15px 0 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.grid img {
  width: 100%;
  border-radius: 10px;
}

.quote {
  background: #f3ece4;
  padding: 20px;
  border-radius: 12px;
  font-style: italic;
  text-align: center;
  margin: 25px 0;
  font-size: 17px;
}

/* ===========================
           АНИМАЦИИ
   =========================== */

.anim {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}

.anim.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===========================
       ДЕСКТОПНАЯ ВЕРСИЯ
   =========================== */

@media (min-width: 768px) {
  .about {
    max-width: 900px;
    padding: 40px 60px;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 30px;
  }

  .text {
    font-size: 18px;
    max-width: 680px;
  }

  .main-photo {
    max-width: 600px;
    margin: 0 auto 30px;
    display: block;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }

  .quote {
    max-width: 650px;
    margin: 40px auto;
    font-size: 20px;
  }

  /* На десктопе анимация слегка другая — появляется слева */
  .anim {
    transform: translateY(20px) translateX(-20px);
  }

  .anim.visible {
    transform: translateY(0) translateX(0);
  }
}

</style>
  