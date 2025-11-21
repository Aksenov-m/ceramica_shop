<template>
    <label class="checkbox">
      <input type="checkbox" v-model="model" />
      <span class="box"></span>
      <slot />
    </label>
  
    <div v-if="error" class="error">{{ error }}</div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  const props = defineProps({
    modelValue: Boolean,
    error: String
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const model = computed({
    get: () => props.modelValue,
    set: v => emit("update:modelValue", v)
  });
  </script>
  
  <style scoped>
  .checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 16px 0;
  }
  .checkbox input {
    display: none;
  }
  .box {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid #c7b8a3;
  }
  .checkbox input:checked + .box {
    background: #e7b39b;
  }
  .error {
    color: #cc4444;
    font-size: 12px;
  }
  </style>
  