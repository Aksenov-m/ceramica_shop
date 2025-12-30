<!-- <template>
    <form class="form" @submit.prevent="submitForm">
      <h2 class="title">Оформление заказа</h2>
  
      <BaseInput 
        v-model="name"
        label="Имя"
        placeholder="Иван Иванов"
        :error="errorName"
        @blur="touchedName = true"
      />
      <BaseInput 
        v-model="phone"
        label="Телефон"
        placeholder="+7 (999) 999-99-99"
        :error="errorPhone"
        @blur="touchedPhone = true"
      />
      <BaseInput 
        v-model="email"
        label="E-mail"
        placeholder="example@mail.com"
        :error="errorEmail"
        @blur="touchedEmail = true"
      />
      <BaseInput 
        v-model="address"
        label="Адрес доставки"
        placeholder="Город, улица, дом, квартира"
        textarea
        :error="errorAddress"
        @blur="touchedAddress = true"
      />
  
      <BaseCheckbox 
        v-model="agree"
        :error="errorAgree"
        @change="touchedAgree = true"
      >
        Я даю согласие на обработку моих персональных данных
      </BaseCheckbox>
  
      <button class="submit">Подтвердить заказ</button>
    </form>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
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

  const touchedName = ref(false);
  const touchedPhone = ref(false);
  const touchedEmail = ref(false);
  const touchedAddress = ref(false);
  const touchedAgree = ref(false);
  
  // Реактивные ошибки - обновляются при изменении значений и touched состояний
  // Computed свойства автоматически пересчитываются при изменении зависимостей
  const errorName = computed(() => {
    if (!touchedName.value) {
      return "";
    }
    const val = name.value?.trim() || "";
    return val === "" ? "Введите имя" : "";
  });
  
  const errorPhone = computed(() => {
    if (!touchedPhone.value) {
      return "";
    }
    const val = phone.value?.trim() || "";
    return val === "" ? "Введите телефон" : "";
  });
  
  const errorEmail = computed(() => {
    if (!touchedEmail.value) {
      return "";
    }
    const val = email.value?.trim() || "";
    if (val === "") {
      return "Введите e-mail";
    }
    if (!val.includes("@") || !val.includes(".")) {
      return "Введите корректный e-mail";
    }
    return "";
  });
  
  const errorAddress = computed(() => {
    if (!touchedAddress.value) {
      return "";
    }
    const val = address.value?.trim() || "";
    return val === "" ? "Введите адрес" : "";
  });
  
  const errorAgree = computed(() => {
    if (!touchedAgree.value) {
      return "";
    }
    return !agree.value ? "Необходимо согласие" : "";
  });
  
  function validate() {
    // Помечаем все поля как touched
    touchedName.value = true;
    touchedPhone.value = true;
    touchedEmail.value = true;
    touchedAddress.value = true;
    touchedAgree.value = true;
  
    // Проверяем ошибки после того как все поля помечены как touched
    return !errorName.value && !errorPhone.value && !errorEmail.value && 
           !errorAddress.value && !errorAgree.value;
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
   -->

   <template>
    <form class="form" @submit.prevent="submit">
      <h2 class="title">Оформление заказа</h2>
  
      <BaseInput
        label="Имя"
        :model-value="form.fields.name"
        :error="form.errors.name"
        placeholder="Иван Иванов"
        @update:model-value="v => update('name', v)"
        @blur="form.touch('name')"
      />
  
      <BaseInput
        label="Телефон"
        :model-value="form.fields.phone"
        :error="form.errors.phone"
        placeholder="+7 (999) 999-99-99"
        @update:model-value="v => update('phone', v)"
        @blur="form.touch('phone')"
      />
  
      <BaseInput
        label="E-mail"
        :model-value="form.fields.email"
        :error="form.errors.email"
        placeholder="example@mail.com"
        @update:model-value="v => update('email', v)"
        @blur="form.touch('email')"
      />
  
      <BaseInput
        textarea
        label="Адрес доставки"
        :model-value="form.fields.address"
        :error="form.errors.address"
        placeholder="Город, улица, дом, квартира"
        @update:model-value="v => update('address', v)"
        @blur="form.touch('address')"
      />
  
      <BaseCheckbox
        :model-value="form.fields.agree"
        :error="form.errors.agree"
        @update:model-value="v => update('agree', v)"
        @change="form.touch('agree')"
      >
        Я даю согласие на обработку персональных данных
      </BaseCheckbox>
  
      <button class="submit">Подтвердить заказ</button>
    </form>
  </template>
  
  <script setup>
  import { useOrderFormStore } from "../../stores/OrderFormStore"
  import BaseInput from "../BaseInput/BaseInput.vue";
  import BaseCheckbox from "../BaseCheckbox/BaseCheckbox.vue";
  
  const form = useOrderFormStore()
  
  const update = (key, value) => {
    form.setField(key, value)
    form.touch(key) // 🔑 ошибка исчезает при вводе
  }
  
  const submit = () => {
    form.touchAll()
    if (!form.isValid) return
  
    console.log("SUBMIT DATA:", form.fields)
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