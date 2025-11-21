<template>
    <div class="card-container">
      <!-- Слайдер -->
      <div v-if="sortedPhotos.length" class="slider-wrapper">
        <div
          class="slider"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          @touchstart="touchStart"
          @touchend="touchEnd"
        >
          <div
            class="slide"
            v-for="(photo, index) in sortedPhotos"
            :key="photo.id || index"
          >
            <img
              :src="getPhotoUrl(photo)"
              class="slide-image"
              @click="openPopup(index)"
              @error="(e) => (e.target.src = placeholder)"
            />
          </div>
        </div>
  
        <!-- Кнопки -->
        <button class="nav-button left" @click="prev" :disabled="currentIndex === 0">‹</button>
        <button class="nav-button right" @click="next" :disabled="currentIndex === sortedPhotos.length - 1">›</button>
  
        <!-- Точки -->
        <div class="dots" v-if="sortedPhotos.length > 1">
          <span
            v-for="(photo, i) in sortedPhotos"
            :key="i"
            class="dot"
            :class="{ active: i === currentIndex }"
            @click="currentIndex = i"
          ></span>
        </div>
      </div>
  
      <!-- Если нет фото -->
      <div v-else>
        <img :src="placeholder" class="slide-image" />
      </div>
  
      <!-- POPUP -->
      <div v-if="popupVisible" class="popup" @click.self="closePopup">
        <img
          :src="getPhotoUrl(sortedPhotos[popupIndex])"
          class="popup-image"
          @error="(e) => (e.target.src = placeholder)"
        />
  
        <button class="popup-close" @click="closePopup">✕</button>
  
        <button class="popup-nav left" @click.stop="popupPrev" :disabled="popupIndex === 0">‹</button>
        <button class="popup-nav right" @click.stop="popupNext" :disabled="popupIndex === sortedPhotos.length - 1">›</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onUnmounted } from "vue";
  import placeholder from "./Image.png";
  
  const props = defineProps({
    photos: { type: Array, default: () => [] },
    price: Number,
    text: String,
  });
  
  // ---------------------------
  // Получение URL
  // ---------------------------
  const getPhotoUrl = (photo) => {
    return photo?.image_url ? photo.image_url : placeholder;
  };
  
  // ---------------------------
  // Сортировка: is_main first
  // ---------------------------
  const sortedPhotos = computed(() => {
    const arr = [...props.photos];
    return arr.sort((a, b) => (b.is_main === true) - (a.is_main === true));
  });
  
  // ---------------------------
  // Слайдер
  // ---------------------------
  const currentIndex = ref(0);
  
  const next = () => {
    if (currentIndex.value < sortedPhotos.value.length - 1) currentIndex.value++;
  };
  
  const prev = () => {
    if (currentIndex.value > 0) currentIndex.value--;
  };
  
  // ---------------------------
  // Свайпы
  // ---------------------------
  let startX = 0;
  
  const touchStart = (e) => {
    startX = e.touches[0].clientX;
  };
  
  const touchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX;
  
    if (diff > 50) prev();
    if (diff < -50) next();
  };
  
  // ---------------------------
  // POPUP
  // ---------------------------
  const popupVisible = ref(false);
  const popupIndex = ref(0);
  
  // Блокировка прокрутки BODY
  const addLock = () => {document.documentElement.classList.add("lock"); // <html>
    document.body.classList.add("lock");};
  const removeLock = () => {  document.documentElement.classList.remove("lock");
  document.body.classList.remove("lock")};
  
  // Открыть попап
  const openPopup = (index) => {
    popupIndex.value = index;
    popupVisible.value = true;
    addLock();
    window.addEventListener("keydown", handleKey);
  };
  
  // Закрыть попап
  const closePopup = () => {
    popupVisible.value = false;
    removeLock();
    window.removeEventListener("keydown", handleKey);
  };
  
  // Навигация в попапе
  const popupNext = () => {
    if (popupIndex.value < sortedPhotos.value.length - 1) popupIndex.value++;
  };
  
  const popupPrev = () => {
    if (popupIndex.value > 0) popupIndex.value--;
  };
  
  // ---------------------------
  // Стрелки на клавиатуре
  // ---------------------------
  const handleKey = (e) => {
    if (!popupVisible.value) return;
  
    switch (e.key) {
      case "ArrowRight":
        popupNext();
        break;
      case "ArrowLeft":
        popupPrev();
        break;
      case "Escape":
        closePopup();
        break;
    }
  };
  
  // Убрать обработчик при удалении компонента
  onUnmounted(() => {
    window.removeEventListener("keydown", handleKey);
    removeLock();
  });
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 32px;
  }
  
  /* СЛАЙДЕР */
  .slider-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }
  
  .slider {
    display: flex;
    transition: transform 0.4s ease;
  }
  
  .slide {
    min-width: 100%;
  }
  
  .slide-image {
    width: 100%;
    height: 360px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
  }
  
  /* Кнопки */
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
    padding: 8px 14px;
    font-size: 28px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .nav-button:disabled {
    opacity: 0.2;
    cursor: default;
  }
  
  .left {
    left: 10px;
  }
  
  .right {
    right: 10px;
  }
  
  /* Точки */
  .dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 6px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    background: #cfcfcf;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .dot.active {
    background: #333;
  }
  
  /* POPUP */
  .popup {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 40;
  }
  
  .popup-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
  }
  
  /* Крестик */
  .popup-close {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 28px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Навигация в попапе */
  .popup-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: rgba(255, 255, 255, 0.6);
    padding: 8px 14px;
    font-size: 28px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .popup-nav.left {
    left: 20px;
  }
  
  .popup-nav.right {
    right: 20px;
  }
  
  .popup-nav:disabled {
    opacity: 0.2;
    cursor: default;
  }
  </style>
  