<!-- <template>
  <div class="wrapper">
    <label>{{ label }}</label>

    <component
      :is="textarea ? 'textarea' : 'input'"
      v-model="model"
      :placeholder="placeholder"
      class="input"
      @blur="$emit('blur')"
    />

    <div class="error" v-if="error && error.trim()">{{ error }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  textarea: Boolean,
  error: String
});

const emit = defineEmits(["update:modelValue", "blur", "input"]);

const model = computed({
  get: () => props.modelValue,
  set: v => emit("update:modelValue", v)
});
</script> -->




<template>
  <label class="field">
    <span class="label">{{ label }}</span>

    <input
      v-if="!textarea"
      class="input"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />

    <textarea
      v-else
      class="input"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />

    <span v-if="error" class="error">{{ error }}</span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  error: String,
  textarea: Boolean,
})
</script>
<style scoped>
  .wrapper {
    margin-bottom: 16px;
  }
  
  label {
    display: block;
    margin-bottom: 6px;
    font-size: 14px;
  }
  
  .input {
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    background: #f7efe7;
    border: none;
    font-size: 15px;
  }
  
  textarea {
    min-height: 80px;
  }
  
  .error {
    margin-top: 4px;
    color: #cc4444;
    font-size: 12px;
  }
  </style>