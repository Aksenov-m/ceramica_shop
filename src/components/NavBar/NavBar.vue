<template>
    <div class="container">
      <div class="nav">
        <div class="link">
          <div class="icon">
            <img class="vector" alt="Vector" :src="vector" />
          </div>
          <div class="text-wrapper">Главная</div>
        </div>
        <div class="div">
          <div class="vector-wrapper">
            <img class="img" alt="Vector" :src="image" />
          </div>
          <div class="text-wrapper-2">Магазин</div>
        </div>
        <div class="link-2">
          <div class="img-wrapper">
            <img class="vector-2" alt="Vector" :src="vector2" />
          </div>
          <div class="text-wrapper-3">О мастере</div>
        </div>
        <div class="link-3">
          <div class="icon">
            <img class="vector-3" alt="Vector" :src="vector3" />
          </div>
          <div class="text-wrapper-4">Корзина</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import image from "./image.svg";
  import vector2 from "./vector-2.svg";
  import vector3 from "./vector-3.svg";
  import vector from "./vector.svg";
  
  export default {
    name: "Container",
    data() {
      return {
        image,
        vector2,
        vector3,
        vector,
      };
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    width: 100%;
    max-width: 390px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    padding: 0 16px 16px;
    box-sizing: border-box;
  }
  
  .container .nav {
    -webkit-backdrop-filter: blur(2px) brightness(100%);
    align-items: center;
    backdrop-filter: blur(2px) brightness(100%);
    background-color: #F5F5F5;
    border: 1px solid;
    border-color: #e5e7eb;
    border-radius: 12px;
    box-shadow: 0px 4px 6px -4px #0000001a, 0px 10px 15px -3px #0000001a;
    display: flex;
    flex: 1;
    justify-content: space-around;
    gap: 0;
    height: 80px;
    overflow: hidden;
  }
  
  .container .link {
    height: 40px;
    margin-left: 0;
    position: relative;
    width: 47.81px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .container .icon {
    height: 28px;
    left: 12px;
    position: absolute;
    top: -2px;
    width: 24px;
  }
  
  .container .vector {
    height: 62.50%;
    left: 17.62%;
    position: absolute;
    top: 18.75%;
    width: 64.76%;
  }
  
  .container .text-wrapper {
    align-items: center;
    color: #4b5563;
    display: flex;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    height: 16px;
    justify-content: center;
    left: 0;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 24px;
    white-space: nowrap;
    width: 48px;
  }
  
  .container .div {
    height: 40px;
    position: relative;
    width: 49.64px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .container .vector-wrapper {
    height: 28px;
    left: 13px;
    position: absolute;
    top: -2px;
    width: 24px;
  }
  
  .container .img {
    height: 62.50%;
    left: 9.44%;
    position: absolute;
    top: 18.75%;
    width: 81.33%;
  }
  
  .container .text-wrapper-2 {
    align-items: center;
    color: #4b5563;
    display: flex;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    height: 16px;
    justify-content: center;
    left: 0;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 24px;
    white-space: nowrap;
    width: 50px;
  }
  
  .container .link-2 {
    height: 40px;
    position: relative;
    width: 62.13px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .container .img-wrapper {
    height: 28px;
    left: 19px;
    position: absolute;
    top: -2px;
    width: 24px;
  }
  
  .container .vector-2 {
    height: 55.56%;
    left: 17.62%;
    position: absolute;
    top: 22.22%;
    width: 64.76%;
  }
  
  .container .text-wrapper-3 {
    align-items: center;
    color: #4b5563;
    display: flex;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    height: 16px;
    justify-content: center;
    left: 0;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 24px;
    white-space: nowrap;
    width: 63px;
  }
  
  .container .link-3 {
    height: 40px;
    position: relative;
    width: 48.97px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .container .vector-3 {
    height: 69.44%;
    left: 17.62%;
    position: absolute;
    top: 15.28%;
    width: 64.76%;
  }
  
  .container .text-wrapper-4 {
    align-items: center;
    color: #4b5563;
    display: flex;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    height: 16px;
    justify-content: center;
    left: 0;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 24px;
    white-space: nowrap;
    width: 49px;
  }
  </style>