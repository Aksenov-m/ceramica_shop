<template>
    <form class="form" @submit.prevent="submitForm">
      <h2 class="title">Оформление заказа</h2>
  
      <BaseInput 
        v-model="name"
        label="Имя"
        placeholder="Иван Иванов"
        :error="errors.name"
      />
      <BaseInput 
        v-model="phone"
        label="Телефон"
        placeholder="+7 (999) 999-99-99"
        :error="errors.phone"
      />
      <BaseInput 
        v-model="email"
        label="E-mail"
        placeholder="example@mail.com"
        :error="errors.email"
      />
      <BaseInput 
        v-model="address"
        label="Адрес доставки"
        placeholder="Город, улица, дом, квартира"
        textarea
        :error="errors.address"
      />
  
      <BaseCheckbox v-model="agree">
        Я даю согласие на обработку моих персональных данных
      </BaseCheckbox>
  
      <button class="submit">Подтвердить заказ</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import BaseInput from "../BaseInput/BaseInput.vue";
  import BaseCheckbox from "../BaseCheckbox/BaseCheckbox.vue";
  
  const emit = defineEmits(["submit"]);
  
  const props = defineProps({
    total: Number
  });
  
  const name = ref("");
  const phone = ref("");
  const email = ref("");
  const address = ref("");
  const agree = ref(false);
  
  const errors = ref({});
  
  function validate() {
    errors.value = {};
  
    if (!name.value) errors.value.name = "Введите имя";
    if (!phone.value) errors.value.phone = "Введите телефон";
    if (!email.value || !email.value.includes("@"))
      errors.value.email = "Введите корректный e-mail";
    if (!address.value) errors.value.address = "Введите адрес";
    if (!agree.value) errors.value.agree = "Необходимо согласие";
  
    return Object.keys(errors.value).length === 0;
  }
  
  function submitForm() {
    if (!validate()) return;
  
    emit("submit", {
      name: name.value,
      phone: phone.value,
      email: email.value,
      address: address.value,
      total: props.total
    });
  }
  </script>
  
  <style scoped>
  .title {
    font-family: "Playfair Display";
    font-size: 22px;
    margin: 20px 0 12px;
  }
  
  .submit {
    width: 100%;
    background: #e7b39b;
    border: none;
    padding: 16px;
    margin-top: 20px;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
  </style>
  