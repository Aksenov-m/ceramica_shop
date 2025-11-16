<!-- <template>
    <div class="ceramic-wheel-loader">
      <div class="wheel">
        <div class="highlight"></div>
      </div>
      <p class="loading-text">Загружаем ещё изделия...</p>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .ceramic-wheel-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    font-family: "Playfair Display", serif;
    color: #4c3f33; /* мягкий кофейно-глиняный */
  }
  
  .wheel {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #d8c3a5, #b49b82, #9b7e5a);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25),
                0 4px 10px rgba(155, 126, 90, 0.25);
    animation: spin 1.8s linear infinite;
  }
  
  .highlight {
    position: absolute;
    top: 18%;
    left: 22%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%);
    opacity: 0.8;
    pointer-events: none;
  }
  
  .loading-text {
    margin-top: 14px;
    font-size: 15px;
    letter-spacing: 0.3px;
    color: #5c4a3b;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
   -->
   <template>
    <div class="ceramic-wheel-loader">
      <div class="wheel">
        <div class="ball" v-for="n in 6" :key="n" :style="getBallStyle(n)"></div>
      </div>
      <p class="loading-text">Загружаем изделия...</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const totalBalls = 6;
  const radius = 30; // радиус круга
  
  // функция расчёта позиции шарика по кругу
  const getBallStyle = (index) => {
    const angle = (360 / totalBalls) * (index - 1);
    return {
      transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
    };
  };
  </script>
  
  <style scoped>
  .ceramic-wheel-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    font-family: "Playfair Display", serif;
    color: #5c4a3b; /* теплый кофейно-глиняный */
  }
  
  .wheel {
    position: relative;
    width: 80px;
    height: 80px;
    animation: spin 1.5s linear infinite;
  }
  
  .ball {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #d8c3a5, #8b7355);
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    transform-origin: center;
  }
  
  .loading-text {
    margin-top: 14px;
    font-size: 15px;
    letter-spacing: 0.3px;
    color: #5c4a3b;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  